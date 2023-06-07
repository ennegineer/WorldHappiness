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

@app.route('/', methods=['GET'])
def home():
    return """API list:
    
    /data/countries:
          returns a list of all countries from the world happiness dataset 
    /happiness/country?country=<countryname>:
          returns all data for specified country 
    /happiness/country/year?country=<countryname>&year=<year>:
          returns all data for specified country and year 
    /happiness/country/column?country=<countryname>&column=<columnname>:
          returns all years data for the specified country and column
    
    Where column names are needed for the happiness data APIs, the available columns are:  
     - country  
     - confidence_in_national_government  
     - log_gdp_per_capita  
     - healthy_life_expectancy_at_birth  
     - positive_affect  
     - life_ladder  
     - generosity  
     - freedom_to_make_life_choices  
     - regional_indicator  
     - perceptions_of_corruption  
     - negative_affect  
     - year  
     - social_support """

# Returns all data for the specified country
@app.route('/happiness/country', methods=['GET'])
# return all data available per country
def all_data_per_country():
    country = app.current_request.query_params.get('country')
    return get_worldHappiness().list_items_for_country(country)

# Returns all values for a specified country and column
@app.route('/happiness/country/column', methods=['GET'])
def list_column_data():
    country = app.current_request.query_params.get('country')
    column = app.current_request.query_params.get('column')
    print(country, column)
    return get_worldHappiness().list_column_data(country, column)

# Returns all data from worldHappiness table.
@app.route('/happiness/all', methods=['GET'])
def all_items():
    return get_worldHappiness().list_all_items()


# Returns all data for the specified country/year
@app.route('/happiness/country/year', methods=['GET'])
# return the data for a specific country and year combination
def country_by_year():
    country =app.current_request.query_params.get('country')
    year = app.current_request.query_params.get('year')
    return get_worldHappiness().get_item(country, year)


# Routes for appdata

# Returns a list of all countries
@app.route('/data/countries', methods=['GET'])
def list_of_countries():
    return get_appData().get_countries_list()


