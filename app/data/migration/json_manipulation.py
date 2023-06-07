import re
import json
from collections import defaultdict

filepath = './aggregate_happydata_countries.json'

with open(filepath, 'r') as file:
    json_data = file.read()

data_dict = json.loads(json_data)

# Define a lambda function to create the inner defaultdict
inner_defaultdict = lambda: defaultdict(float)

# Create the nested defaultdict
nested_dict = defaultdict(inner_defaultdict)

for key in data_dict:
    pattern = r"\('([^']*)', '([^']*)'\)"

    matches = re.match(pattern, key)

    if matches:
        variable1 = matches.group(1)
        variable2 = matches.group(2)
        nested_dict[variable1][variable2] = data_dict[key]
    else:
        print("No match found.")

with open('./aggregate_happydata_countries_formatted.json', 'w') as outfile:
    json.dump(dict(nested_dict), outfile)