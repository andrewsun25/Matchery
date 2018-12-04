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

		# print(match.match(applicantPreferences, groupPreferences))

	def testGroupNoMatchApplicant(self):
		applicantPreferences = {
			"sblair": ["WashU Diwali 1", "WashU Diwali 2"],
			"zhuyuanzhang": ["WashU Diwali 1", "WashU Diwali 2"],
			"admin": ["WashU Diwali 2", "WashU Diwali 1"]
		}

		groupPreferences = {
			"WashU Diwali 1": ["sblair", "zhuyuanzhang"],
			"WashU Diwali 2": ["sblair"],
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
		# print(match.match(applicantPreferences, groupPreferences))

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