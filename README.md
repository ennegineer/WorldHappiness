# World Happiness

Examining two datasets from Kaggle to look for trends between happiness, socioeconomic status, and internet usage.

## Datasets

Sourced from Kaggle.com:  

[World Happiness Report 2005-2022](https://www.kaggle.com/datasets/usamabuttar/world-happiness-report-2005-present) -- The WHR is a publication of the Sustainable Development Solutions Network.

[Global Internet users](https://www.kaggle.com/datasets/ashishraut64/internet-users) -- Internet Users by Country 1980-2020

Further information on the World Happiness report:

[World Happiness Report (PDF)](https://happiness-report.s3.amazonaws.com/2023/WHR+23.pdf) -- 2023, John F. Helliwell, Richard Layard, Jeffrey D. Sachs,
Jan-Emmanuel De Neve, Lara B. Aknin, and Shun Wang

Additional information on the data is listed at the bottom of this readme, under 'Definitions and Assumptions'.

## Tech Stack
### Data Processing
- Import CSV files and inspect data to understand available information
- Normalize data to combine for analysis (make a subset of each dataset that exactly matches the countries and years between both; drop rows with missing values)
- After processing, export the data to .json to use in NoSQL database
#### Analysis
 - Rank happiness by country, based on available demographics
 - Compare number of internet users between countries; years
 - Is the world's happiness declining?

### Website
#### Frontend
- Svelte frontend framework
- TailwindCSS
- Vite
#### Backend
- Google Firestore
- Google Cloud Functions
- Google Storage
#### Deployment
- Google hosting

## Definitions and Assumptions 

### World Happiness Report

#### Data Points
1. **Log GDP Per Capita**: Log GDP per capita is in terms of Purchasing Power Parity (PPP) adjusted to a constant 2017 international dollars, taken from the World Development Indicators (WDI) by the World Bank (version 17, metadata last updated on January 22, 2023). See Statistical Appendix 1 for more details. GDP data for 2022 are not yet available, so we extend the GDP time series from 2021 to 2022 using country-specific forecasts of real GDP growth from the OECD Economic Outlook No. 112 (November 2022) or, if missing, from the World Bank’s Global Economic Prospects (last updated: January 10, 2023), after adjustment for population growth. The equation uses the natural log of GDP per capita, as this form fits the data significantly better than GDP per capita.  
2. **Healthy Life Expectancy At Birth**: The time series for **Healthy life expectancy at birth** is constructed based on data from the World Health Organization (WHO) Global Health Observatory data repository, with data available for 2005, 2010, 2015, 2016, and 2019. To match this report’s sample period (2005-2022), interpolation and extrapolation are used. See Statistical Appendix 1 for more details.  
3. **Social Support**: Social support (0-1) is the national average of the binary responses (0=no, 1=yes) to the Gallup World Poll (GWP) question “If you were in trouble, do you have relatives or friends you can count on to help you whenever you need them, or not?”  
4. **Freedom To Make Life Choices**: Freedom to make life choices (0-1) is the national average of binary responses to the GWP question “Are you satisfied or dissatisfied with your freedom to choose what you do with your life?”  
5. **Generosity**: Generosity is the residual of regressing the national average of GWP responses to the donation question “Have you donated money to a charity in the past month?” on log GDP per capita.  
6. **Perceptions Of Corruption**: Perceptions of corruption (0-1) are the average of binary answers to two GWP questions: “Is corruption widespread throughout the government or not?” and “Is corruption widespread within businesses or not?” Where data for government corruption are missing, the perception of business corruption is used as the overall corruption perception measure.  
7. **Positive Affect**: Positive affect is defined as the average of previous-day effects measures for laughter, enjoyment, and interest. The inclusion of interest (first added for World Happiness Report 2022), gives us three components in each of positive and negative affect, and slightly improves the equation fit in column 4. The general form for the affect questions is: Did you experience the following feelings during a lot of the day yesterday?  
8. **Negative Affect**: Negative affect is defined as the average of previous-day effects measures for worry, sadness, and anger.
9. **Country Name**
10. **Regional Indicator**: Region where the country is located.
11. **Year**: Data spans from 2005-2022.
12. **Life Ladder**: Aggregated data from the Gallup World Poll where participants are asked to rate their lives on a scale from 0 to 10, with the best being 10.
13. **Confidence In National Government**

#### Assumptions
The data does not give a happiness rating based on a formula or weighted scale of the available data. Rather, the happiness rating (the 'Life Ladder') is a scale of 0-10 where participants were asked to rate their own current lives. 

While the other factors certainly affect a person's happiness, there may be more personal factors that skew participants' answers. We will want to look at combinations of these factors, and compare to the Life Ladder results.

**Overall happiness average**  
We can group the data by country, remove all rows where there is missing data, then average all the elements for all years.

**Happiness increasing or declining?**
We will need to decide how to handle missing data. Potentially, we could replace blanks with an average of the previous and next years.


### Global Internet Users
#### Data Points
1.  **Entity** - Contains the name of the countries and the regions.
2.  **Code** - Information about country code.
    - Where code has the value 'Region', it denotes a group of various countries in a region, OR an income bracket.
3.  **Year** - Data spans from 1980-2020.
4.  **Cellular Subscription** - Mobile phone subscriptions per 100 people. This number can be over 100 when the average person has more than one subscription to a mobile service.
5.  **Internet Users(%)** - The share of the population that is accessing the internet for all countries of the world.
6.  **No. of Internet Users** - Number of people using the Internet in every country.
7.  **Broadband Subscription** - The number of fixed broadband subscriptions per 100 people. This refers to fixed subscriptions to high-speed access to the public Internet (a TCP/IP connection), at downstream speeds equal to, or greater than, 256 kbit/s.

#### Assumptions
**Separating Countries, Regions, and Incomes**  
We have separated the 'Region' codes from the countries, so we can look at the countries without other noise. We can look separately at the regions, which are now separated into two groups: true regions, and income brackets.

**Income Brackets**  
'No. of Internet Users' is 0 for all incomes. We assume this is because the incomes span multiple countries, and the definition of this field is 'the number of people using the internet in every country'.

We might assume that 'Internet Users(%)' means the share of the population that is accessing the internet within the income brackets.

The income brackets are as follows:
- High income
- Upper middle income
- Middle income
- Lower middle income
- Low income
- Low and middle income

The last bracket appears to be a combination of other brackets. We will ignore this.