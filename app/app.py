import os
import boto3
from chalice import Chalice
from chalicelib import db

app = Chalice(app_name='chaliceapp')
app.debug = True
_WorldHappinessDB = None
_AppDataDB = None

def get_worldHappiness():
    global _WorldHappinessDB
    if _WorldHappinessDB is None:
        _WorldHappinessDB = db.WorldHappinessDB(
            boto3.resource('dynamodb').Table(
                os.environ['worldhappiness'])
        )
    return _WorldHappinessDB

def get_appData():
    global _AppDataDB
    if _AppDataDB is None:
        _AppDataDB = db.AppDataDB(
            boto3.resource('dynamodb').Table(
                os.environ['appdata'])
        )
    return _AppDataDB

# BEGIN API ROUTES

# Returns all data for the specified country
@app.route('/happiness/{country}', methods=['GET'])
# return all data available per country
def all_data_per_country(country):
    return get_worldHappiness().list_items_for_country(country)

# Returns all values for a specified country and column
@app.route('/happiness/country/column', methods=['GET'])
def list_column_data():
    country = app.current_request.query_params.get('country')
    column = app.current_request.query_params.get('column')
    print(country, column)
    return get_worldHappiness().list_column_data(country, column)

# this pulls all data from worldHappiness table. route is not specific enough.
@app.route('/', methods=['GET'])
def all_items():
    return get_worldHappiness().list_all_items()


# nope - this is resource heavy. Will soon replace with the data/ route below.
@app.route('/happiness/country', methods=['GET'])
# return all countries in the dataset for dropdown menu options
# need to filter this to only show unique country names
def list_of_all_countries():
    return get_worldHappiness().list_countries()


# Returns all data for country/year
@app.route('/happiness/{country}/{year}', methods=['GET'])
# return the data for a specific country and year combination
def country_by_year(country, year):
    return get_worldHappiness().get_item(country, year)


# Routes for appdata

# Returns a list of all countries
@app.route('/data/countries', methods=['GET'])
def list_of_countries():
    return get_appData().get_countries_list()


