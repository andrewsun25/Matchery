import unittest
import match

class TestMatch(unittest.TestCase):

	def test_match(self):
		applicantPreferences = [
			[4, 0, 1],
			[4, 0, 2],
			[3, 2, 4],
			[1, 2, 3]
		]

		groupPreferences = [
			[0, 3, 2],
			[0, 1, 2],
			[3, 1, 0],
			[1, 3, 0],
			[1, 3, 0]
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