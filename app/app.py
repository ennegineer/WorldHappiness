import os

import boto3
from chalice import Chalice
from chalicelib import db


app = Chalice(app_name='chaliceapp')
app.debug = True
_DB = None
_USER_DB = None
_AUTH_KEY = None
_SSM_AUTH_KEY_NAME = '/todo-sample-app/auth-key'


# @app.route('/login', methods=['POST'])
# def login():
#     body = app.current_request.json_body
#     record = get_users_db().get_item(
#         Key={'username': body['username']})['Item']
#     jwt_token = auth.get_jwt_token(
#         body['username'], body['password'], record, get_auth_key())
#     return {'token': jwt_token}


# def get_users_db():
#     global _USER_DB
#     if _USER_DB is None:
#         _USER_DB = boto3.resource('dynamodb').Table(
#             os.environ['USERS_TABLE_NAME'])
#     return _USER_DB


def get_app_db():
    global _DB
    if _DB is None:
        _DB = db.DynamoDB(
            boto3.resource('dynamodb').Table(
                os.environ['worldhappiness'])
        )
    return _DB


@app.route('/', methods=['GET'])
def all_items():
    return get_app_db().list_all_items()

@app.route('/happiness', methods=['GET'])
# list the countries and years available to query
def list_countries():
    return get_app_db().list_items()


@app.route('/happiness/{country}', methods=['GET'])
# return all data available per country
def all_data_per_country(country):
    return get_app_db().list_items(country)

@app.route('/happiness/{country}/{year}', methods=['GET'])
# return the data for a specific country and year combination
def country_by_year(country, year):
    return get_app_db().get_item(country, year)




# The view function above will return {"hello": "world"}
# whenever you make an HTTP GET request to '/'.
#
# Here are a few more examples:
#
# @app.route('/hello/{name}')
# def hello_name(name):
#    # '/hello/james' -> {"hello": "james"}
#    return {'hello': name}
#
# @app.route('/users', methods=['POST'])
# def create_user():
#     # This is the JSON body the user sent in their POST request.
#     user_as_json = app.current_request.json_body
#     # We'll echo the json body back to the user in a 'user' key.
#     return {'user': user_as_json}
#
# See the README documentation for more examples.
#
