# Client
## Initial Setup
`npm install` to get all packages.  
`npm run dev` to get the app up and running locally.
## Environment
Create a .env file at the root of the client directory.  
Fill in the .env with the information for your setup. These are just sample data points.
```
# Base path to api hosted on AWS.
BASE_URL="https://abc123.execute-api.us-west-1.amazonaws.com/api/"
```
## Structure
`src` is where all of the svelte and server code will live.  
`src/lib` is where our business logic of interacting with our API is written. Inside here, we will have server code that won't expose sensitive data to the client.  
SvelteKit comes with SSR (server side rendering) so we can do data fetching behind the scenes before we send the HTML to the client computer.  
`src/routes` is where SvelteKit stores all the pages of our app. Each folder is a part of the URL (file based routing).