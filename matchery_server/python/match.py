from sortedcontainers import SortedDict
import sys

def makeRankings(preferences):
    rankings = {}
    for rank, agent in enumerate(preferences):
        rankings[agent] = rank
    return rankings


class Group:
    def __init__(self, name, preferences, quota):
        '''
        @preferences: IE (2, 0, 1). Tuple of group's preferences over applicants with preferences[0] being the most preferred applicant.
        @rankings: IE {0:1, 2:0, 1:2}. Dictionary of rank of each applicant.
        '''
        # self.preferences = preferences
        self.applicantToRank = makeRankings(preferences) # ["andrew", "will"]
        self.name = name
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
        
        return acceptedApplicants, rejectedApplicants


class Applicant:
    def __init__(self, name, preferences):
        self.preferences = preferences
        self.name = name

    def getBestGroup(self):
        return self.preferences[0]

    def removeTopChoice(self):
        self.preferences.pop(0)

def match(applicantPreferences, groupPreferences, groupQuotas):
    applicants = {}
    for name in applicantPreferences:
        applicants[name] = Applicant(name, applicantPreferences[name])
        

    groups = {}
    for name in groupPreferences:
        groups[name] = Group(name, groupPreferences[name], groupQuotas[name])

    eligibleApplicants = applicants.copy()
    # while exists applicant such that applicant hasn't been rejected by everyone or accepted anywhere:
    while eligibleApplicants:
        # All eligibleApplicants apply to their top choice
        for applicantName, eligibleApplicant in eligibleApplicants.items():
            if not eligibleApplicant.preferences:
                eligibleApplicants.remove(eligibleApplicant)
                continue

            bestGroupName = eligibleApplicant.getBestGroup() # returns string
            bestGroup = groups[bestGroupName]
            if applicantName in bestGroup.applicantToRank:
                bestGroup.addToWaitList(applicantName)
            else:
                eligibleApplicant.removeTopChoice()

        for groupName, group in groups.items():
            accepted, rejected = group.acceptQuota()
            for applicantName in rejected:
                applicant = applicants[applicantName]
                applicant.removeTopChoice()

            for applicantName in accepted:
                if applicantName in eligibleApplicants:
                    eligibleApplicants.pop(applicantName)

            
    groupAcceptances = {}
    for groupName, group in groups.items():
        waitList = []
        for rank in group.waitList:
            applicant = group.waitList[rank]
            waitList.append(applicant)
        groupAcceptances[groupName] = waitList
    return groupAcceptances

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
