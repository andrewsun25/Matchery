import unittest
import match

class TestMatch(unittest.TestCase):

	def test_match(self):
		applicantPreferences = [
			[4, 0, 1, 2, 3], # got 4
			[4, 0, 2, 3, 1], # got 4
			[3, 2, 4, 1, 0], # got 1
			[1, 2, 3, 4, 0] # got 2
		]

		groupPreferences = [
			[0, 3, 2], # got None
			[0, 1, 2], # got 2
			[3, 1, 0], # got 3
			[1, 3, 0], # got None
			[1, 3, 0] # got 1, 0
		]

		groupQuotas = [2, 2, 2, 2, 2]

		print(match.match(applicantPreferences, groupPreferences, groupQuotas))
  

	# def check_optimal(self, groupsAcceptances, applicantRankings, groupRankings):
	# 	for applicant, applicantRanking in enumerate(applicantRankings):
	# 		for group in applicantRanking:
	# 			groupRanking = groupRankings[group]
	# 			groupAcceptances = groupsAcceptances[group]
	# 			for acceptedApplicant in groupAcceptances:
	# 				if groupRanking[applicant] < groupRanking[acceptedApplicant] and applicantRanking[group] != 0:
	# 					return False
	# 	return True


if __name__ == '__main__':
	unittest.main()