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

`/data/countries`: returns a list of all countries from the world happiness dataset  
`/happiness/{country}`: returns all data for specified country  
`/happiness/{country}/{year}`: returns all data for specified country and year  
`/happiness/country/column`: returns all years data for the specified country and column.  
> Example of query parameters: `happiness/country/column?country=Georgia&column=life_ladder`

## Error handling  

Missing Authentication Token error can come from incorrect paths. Check gateway service in AWS console to check the following:  
- domain name
- path
- method
- auth requirement