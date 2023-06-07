import os
import boto3
from boto3.dynamodb.conditions import Key
import json
from decimal import Decimal

filepath = '../json/aggregate_happydata_countries_formatted.json'

with open(filepath, 'r') as file:
    json_data = file.read()

data_dict = json.loads(json_data, parse_float=Decimal)


DB = boto3.resource('dynamodb').Table('worldhappiness-appdata')

print(data_dict)

record = {
    'pKey': 'aggregate' ,
    'rKey': 'happydata_countries',
    'countries': data_dict
}

DB.put_item(Item = record)

