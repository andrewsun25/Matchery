from sortedcontainers import SortedDict
import sys

def makeRankings(preferences):
    rankings = {}
    for rank, agent in enumerate(preferences):
        rankings[agent] = rank
    return rankings


class Group:
    def __init__(self, num, preferences, quota):
        '''
        @preferences: IE (2, 0, 1). Tuple of group's preferences over applicants with preferences[0] being the most preferred applicant.
        @rankings: IE {0:1, 2:0, 1:2}. Dictionary of rank of each applicant.
        '''
        # self.preferences = preferences
        self.applicantToRank = makeRankings(preferences)
        self.num = num
        self.quota = quota
        self.waitList = SortedDict() # rank --> applicant

    def addToWaitList(self, applicant):
        rank = self.applicantToRank[applicant]
        self.waitList[rank] = applicant


    def acceptQuota(self):
        accepted = self.waitList.islice(0, self.quota)
        acceptedApplicants = [self.waitList[rank] for rank in accepted]

        rejected = self.waitList.islice(self.quota)
        rejectedApplicants = [self.waitList.pop(rank) for rank in rejected]
        
        print("rejectedApplicants ",rejectedApplicants," acceptedApplicants",acceptedApplicants)
        return acceptedApplicants, rejectedApplicants


class Applicant:
    def __init__(self, num, preferences):
        self.preferences = preferences
        self.num = num

    def getBestGroup(self):
        return self.preferences[0]

    def removeTopChoice(self):
        self.preferences.pop(0)

'''
There are G groups and A applicants
@applicantPreferences: ((0, 1, 2), 
(2, 1), 
...) # applicantPreferences[3] --> tuple of applicant 3's preferences among groups they would consider. Dimensions are (A x some # that is at most G)
@groupPreferences: ((0, 2, 1), 
(0), 
...). # groupPreferences[3] --> tuple of group 3's preferences among applicants they would consider. Dimensions are (G x some # that is at most A)
@groupQuotas: (13, 14, 15, 8, ...) # groupQuotas[3] --> maximum number of applicants that group 3 can accept. len(groupQuotas) == G
returns: (G x A) matrix @match,  where match[0][1] == 1 indicates a match between group 0 and applicant 1 and match[0][1] == 0 indicates no match.

'''


def match(applicantPreferences, groupPreferences, groupQuotas):
    applicants = []
    for i, preference in enumerate(applicantPreferences):
        applicants.append(Applicant(i, preference))
    applicants = tuple(applicants)

    groups = []
    for i, preference in enumerate(groupPreferences):
        groups.append(Group(i, preference, groupQuotas[i]))
    groups = tuple(groups)

    eligibleApplicants = set(applicants)
    # while exists applicant such that applicant hasn't been rejected by everyone or accepted anywhere:
    while eligibleApplicants:
        for eligibleApplicant in eligibleApplicants.copy():
            bestGroupNum = eligibleApplicant.getBestGroup()
            bestGroup = groups[bestGroupNum]
            # Applicant applies to their top choice
            if eligibleApplicant.num in bestGroup.applicantToRank:
                bestGroup.addToWaitList(eligibleApplicant.num)

        for group in groups:
            accepted, rejected = group.acceptQuota()
            # print("accepted", accepted, " rejected", rejected)
        # After applicant applies to their top choice, they cannot apply to that choice again
        for applicantNum in rejected:
            applicant = applicants[applicantNum]
            applicant.removeTopChoice()
            if not applicant.preferences:
                eligibleApplicants.remove(applicant)

        for applicantNum in accepted:
            applicant = applicants[applicantNum]
            if applicant in eligibleApplicants:
                eligibleApplicants.remove(applicant)

            
    acceptedMatrix = []
    for group in groups:
        waitList = []
        for rank in group.waitList:
            applicant = group.waitList[rank]
            waitList.append(applicant)
        acceptedMatrix.append(waitList)
    return acceptedMatrix

def parseStringToPreferences(string, numAgents):
    # len preferencesList == 12, numAgents = 3, numPreferencesPerAgent = 4. start = 0, start + numPreferencesPerAgent = 4.
    preferencesList = [int(c) for c in string.split(',')] 
    numPreferencesPerAgent = int(len(preferencesList) / numAgents)
    preferences = []
    for i in range(0, numAgents):
        start = i * numPreferencesPerAgent
        preferences.append(preferencesList[start:start + numPreferencesPerAgent])
    return preferences

def parseStringToList(string):
    return [int(c) for c in string.split(',')]

if __name__ == "__main__":
    # 5 groups, 4 applicants

    numApplicants = int(sys.argv[4])
    numGroups = int(sys.argv[5])

    applicantPreferences = parseStringToPreferences(sys.argv[1], numApplicants)

    groupPreferences = parseStringToPreferences(sys.argv[2], numGroups)

    groupQuotas = parseStringToList(sys.argv[3])

    print(match(applicantPreferences, groupPreferences, groupQuotas))

    sys.stdout.flush()
