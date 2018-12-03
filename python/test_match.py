import unittest
import match

class TestMatch(unittest.TestCase):

	def test_match(self):
		applicantPreferences = {
			"andrew": ["aristocats", "ghostlights"],
			"zhi": ["singers", "sensasians"],
			"will": ["ghostlights", "aristocats"]
		}

		groupPreferences = {
			"aristocats": ["andrew", "will"],
			"sensasians": ["zhi"],
			"singers": ["andrew"],
			"ghostlights": ["andrew"]
		}

		groupQuotas = {
			"aristocats": 2,
			"sensasians": 2,
			"singers": 2,
			"ghostlights": 2
		}

		print(match.match(applicantPreferences, groupPreferences))
  
	def testEmptyGroupPreferences(self):
		applicantPreferences = {
		}

		groupPreferences = {
		}
		print(match.match(applicantPreferences, groupPreferences))

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