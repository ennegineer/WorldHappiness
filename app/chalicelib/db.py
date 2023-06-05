from uuid import uuid4

from boto3.dynamodb.conditions import Key

DEFAULT_USERNAME = 'default'

# class InMemoryHappyDB(happyDB):
#     def __init__(self, state=None):
#         if state is None:
#             state = {}
#         self._state = state

#     def list_all_items(self):
#         all_items = []
#         for country in self._state:
#             all_items.extend(self.list_items(country))
#         return all_items

#     def list_items(self, country):
#         return list(self._state.get(country, {}).values())

#     def add_item(self, description, metadata=None, username=DEFAULT_USERNAME):
#         if username not in self._state:
#             self._state[username] = {}
#         uid = str(uuid4())
#         self._state[username][uid] = {
#             'uid': uid,
#             'description': description,
#             'state': 'unstarted',
#             'metadata': metadata if metadata is not None else {},
#             'username': username
#         }
#         return uid

#     def get_item(self, country, year):
#         return self._state[country][year]

#     def delete_item(self, uid, username=DEFAULT_USERNAME):
#         del self._state[username][uid]

#     def update_item(self, uid, description=None, state=None,
#                     metadata=None, username=DEFAULT_USERNAME):
#         item = self._state[username][uid]
#         if description is not None:
#             item['description'] = description
#         if state is not None:
#             item['state'] = state
#         if metadata is not None:
#             item['metadata'] = metadata

class WorldHappinessDB():
    def __init__(self, table_resource):
        self._table = table_resource

    def list_all_items(self):
        response = self._table.scan()
        return response['Items']

    def list_countries(self):
        # get a list of unique countries from the country column
        response = self._table.scan()
        # countries = response['Items']['country']
        countries = [record['country'] for record in response['Items']]
        country_list = list(set(countries))
        country_list.sort()
        return country_list

    def list_column_data(self, country, column):
        response = self._table.query(
            KeyConditionExpression=Key('country').eq(country)
        )
        records = [(record['year'], record[column]) for record in response['Items']]
        return records
    
    # def test(self, column, value):
    #     response = self._table.query(
    #         KeyConditionExpression=Key(column).eq(value)
    #     )
    #     return response['Items']

    def list_items_for_country(self, country):
        response = self._table.query(
            KeyConditionExpression=Key('country').eq(country)
        )
        return response['Items']

    def get_item(self, country, year):
        try:
            response = self._table.get_item(
            Key={
                'country': country,
                'year': int(year),
            },
            )
            return response['Item']
        except:
            return 'The country or year you searched for could not be found. Note: the data spans years 2005 to 2022.'


class AppDataDB():
    def __init__(self, table_resource):
        self._table = table_resource

    def get_countries_list(self):
        # get a list of unique countries
        try:
            response = self._table.get_item(
                Key={
                    'pKey': 'country',
                    'rKey': 'list',
                },
            )
            return response['Item']['countries']
        except:
            return 'You broke something. Try again.'