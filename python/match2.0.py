from sortedcontainers import SortedDict


def makeRankings(preferences):
	rankings = {}
	for rank, applicant in enumerate(preferences):
	    rankings[applicant] = rank
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
	    self.waitList = SortedDict()

	def addToWaitList(self, applicant):
		rank = self.applicantToRank[applicant]
		self.waitList[rank] = applicant
		

	def acceptQuota(self):
	    rejected = self.waitList.islice(self.quota)
	    for rank in rejected:
	    	self.waitList.pop(rank)


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
            # After applicant applies to their top choice, they cannot apply to that choice again
            eligibleApplicant.removeTopChoice()
            # If the applicant has no more places to apply
            if not eligibleApplicant.preferences:
                eligibleApplicants.remove(eligibleApplicant)

        for group in groups:
            group.acceptQuota()

    acceptedMatrix = []
    for group in groups:
    	waitList = []
    	for rank in group.waitList:
    		waitList.append(group.waitList[rank])
    	acceptedMatrix.append(waitList)
    return acceptedMatrix

if __name__ == "__main__":
# 5 groups, 4 applicants
	applicantPreferences = [
	    [4, 0, 1], # 0. Applies to 1.
	    [4, 0, 2], # 1
	    [3, 2, 4], # 2
	    [1, 2, 3]  # 3
	]

	groupPreferences = [
	    [0, 3, 2], # 0
	    [0, 1, 2], # 1 NONE
	    [3, 1, 0], # 2
	    [1, 3, 0], # 3 NONE
	    [1, 3, 0]  # 4
	]

	groupQuotas = [2, 2, 2, 2, 2]
	print(match(applicantPreferences, groupPreferences, groupQuotas))
