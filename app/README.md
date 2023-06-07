# App Information  

## Setup  

**To run the app locally:**  
Move into the app directory, then  
`. venv37/Scripts/activate` to activate the environment, and  
`chalice local` to run Chalice locally.

**To publish changes to AWS:**  
`chalice deploy`

## Available APIs  

The database has two tables: one for world happiness data and another for aggregated data. The APIs available are listed below.  

`/`: returns the below list of APIs and available columns  
`/data/countries`: returns a list of all countries from the world happiness dataset  
`/happiness/country?country=<countryname>`: returns all data for specified country  
`/happiness/country/year?country=<countryname>&year=<year>`: returns all data for specified country and year  
`/happiness/country/column?country=<countryname>&column=<columnname>`: returns all years data for the specified country and column  
> Example of query parameters: `happiness/country/column?country=Georgia&column=life_ladder`

Where column names are needed for the happiness data APIs, the available columns are:  
    country  
    confidence_in_national_government  
    log_gdp_per_capita  
    healthy_life_expectancy_at_birth  
    positive_affect  
    life_ladder  
    generosity  
    freedom_to_make_life_choices  
    regional_indicator  
    perceptions_of_corruption  
    negative_affect  
    year  
    social_support  


## Error handling  

Missing Authentication Token error can come from incorrect paths. Check gateway service in AWS console to check the following:  
- domain name
- path
- method
- auth requirement