from sortedcontainers import SortedDict
import json
import sys

def makeRankings(preferences):
    rankings = {}
    for rank, agent in enumerate(preferences):
        rankings[agent] = rank
    return rankings

class GroupNoQuotas:
    def __init__(self, name, preferences):
        '''
        @preferences: IE (2, 0, 1). Tuple of group's preferences over applicants with preferences[0] being the most preferred applicant.
        @rankings: IE {0:1, 2:0, 1:2}. Dictionary of rank of each applicant.
        '''
        # self.preferences = preferences
        self.applicantToRank = makeRankings(preferences) # ["andrew", "will"]
        self.name = name
        self.waitList = SortedDict() # rank --> applicant

    def addToWaitList(self, applicant):
        rank = self.applicantToRank[applicant]
        self.waitList[rank] = applicant


    def acceptQuota(self):
        acceptedApplicants = [self.waitList[rank] for rank in self.waitList]
        return acceptedApplicants

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

def match(applicantPreferences, groupPreferences):
    if len(applicantPreferences) == 0 or len(groupPreferences) == 0:
        return {}
        
    applicants = {}
    for name in applicantPreferences:
        applicants[name] = Applicant(name, applicantPreferences[name])

    groups = {}
    for name in groupPreferences:
        groups[name] = GroupNoQuotas(name, groupPreferences[name])

    eligibleApplicants = applicants.copy()
    # while exists applicant such that applicant hasn't been rejected by everyone or accepted anywhere:
    while eligibleApplicants:
        # All eligibleApplicants apply to their top choice
        for applicantName, eligibleApplicant in eligibleApplicants.copy().items():
            if not eligibleApplicant.preferences:
                eligibleApplicants.pop(applicantName)
                continue

            bestGroupName = eligibleApplicant.getBestGroup()
            bestGroup = groups[bestGroupName]
            if applicantName in bestGroup.applicantToRank:
                bestGroup.addToWaitList(applicantName)
            else:
                eligibleApplicant.removeTopChoice()

        for groupName, group in groups.items():
            accepted = group.acceptQuota()

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




if __name__ == "__main__":
    # 5 groups, 4 applicants

    data = json.loads(sys.argv[1])

    # numApplicants = int(sys.argv[4])
    # numGroups = int(sys.argv[5])

    # applicantPreferences = parseStringToPreferences(sys.argv[1], numApplicants)

    # groupPreferences = parseStringToPreferences(sys.argv[2], numGroups)

    # groupQuotas = parseStringToList(sys.argv[3])
    # print("ASD")
    print(match(data["applicantPreferences"], data["groupPreferences"]))

    sys.stdout.flush()
