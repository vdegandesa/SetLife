# SetLife

Boiler plate for React web app

Libaries used: Express, React, Redux, React Router, Webpack


## Setup

Clone repo

cd **setgov**

Install Dependencies `npm install` *make sure to have **webpack**, **webpack-dev-server** and 
**forever** installed globally*

#Usage

##Development

`npm run dev`

`open http://localhost:8080/webpack-dev-server/`

`Entry point Setlife/src/components/App`

Run command `npm run dev` to start webpack-dev-server , for custom configuration go to webpack.config.js

##Production

`npm run deploy`

bundle will reside in `Setlife/public` 

*All static files such as images and fonts are in public folder*

##Testing Production bundle 

`npm run start`

`open http://localhost:3000`

will start server, runs on bundle files in public

`npm run stop` to halt server 



