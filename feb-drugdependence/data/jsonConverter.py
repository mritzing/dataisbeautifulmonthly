# conver csv to typescript json objects
"""
# https://swimlane.gitbook.io/ngx-charts/examples/polar-radar-chart#data-format
{
	"drug_name"	: "Heroin",
	series: [
	{
		"name": x,
		"value": x
	},
	{
		"name": x,
		"value": x
	}
	]

}
"""

# items are sorted by schedule in file already 
# Drug	US-Schedule	Acute Harm	Chronic Harm	Intravenous Harm	Pleasure	Psychological	Physical	Intoxication	Social Harm	Health-Care Costs


import csv 
import json 

headers = []
f = open("test.ts", "w+")

# for some reason thought write automatically added newlines, oops
def writeNewLine(str):
	f.write(str + '\n')


def parseLine(line):
	writeNewLine("{\n\t\'name\' : \'%s\'," % line[0])
	writeNewLine("\t\'series\': [")
	for x in range(2, len(line)):
		writeNewLine("\t\t{")
		writeNewLine("\t\t\t\'name\': \'%s\',"% headers[x])
		writeNewLine("\t\t\t\'value\': %s"% line[x])
		writeNewLine("\t\t},")
	writeNewLine("\t]")
	writeNewLine("},")


with open('drug-main.csv') as csv_file: 
	csv_reader = csv.reader(csv_file, delimiter=',')
	headers = next(csv_reader, None)
	writeNewLine("export const sched1 = [")
	for row in csv_reader:
		# write ts lines
		if row[0] == 'Cocaine': 
			print('linematch')
			writeNewLine('];')
			writeNewLine("export const sched2 = [")
		elif row[0] == 'Barbiturates': 
			writeNewLine('];')
			writeNewLine("export const sched3 = [")
		elif row[0] == 'Benzodiazepines': 
			writeNewLine('];')
			writeNewLine("export const sched4 = [")
		elif row[0] == 'Tobacco': 
			writeNewLine('];')
			writeNewLine("export const legal = [")
		parseLine(row)
	writeNewLine('];')
	f.close()