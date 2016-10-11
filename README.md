# SetLife

Boiler plate for React web app

Libaries used: Express, React, Redux, React Router, Webpack


## Getting Started

Clone latest repo by running:

```
	https://github.com/brgarciarivas/SetLife.git

	cd setlife
```	

###Install all dependencies, run : `npm install` 

This will install all dependencies and developer tools

##Directory Layout

Get familiar witht the **setlife** folder structure

```
|-- /public/                                    # Folder holds all compiled and static files such as fonts and images
	|-- /fonts/									# Set of Avenir Font used copmany wide
	|-- /images/								# Store all photos here
|-- /src/										# Source code for application
	|-- /actions/								# All actions for redux 
	|-- /components/							# React components
	|-- /constants/								# Any constant variable used throughout the app
	|-- /reducers/								# Reducers for redux
	|-- /scripts/								# Any funcinality not neciciarlly needed inside any component
	|-- /styles/								# All .less stylesheet
```

#Usage

##Development

Development files are served from webpack-dev-server with webpack.config.js and are hot-reloaded automatically.

to start webpack-dev-server run:

	npm run dev

this command will bundle up files for webpack-dev-sever and host them on: 

	http://localhost:8080/webpack-dev-server/

**_anything outside of src folder will not be hot-reloaded on change_**

##Production	

In development bundle are created behind the scene and are not production ready, production ready bundle are served from webpack in webpack.config.production.js. To create production ready bundle run: 

	npm run deploy

this command will bundle up files and export them to public folder:

	Setlife/public

##Test Production Bundle

Testing production bundle can be done by running expres server from server.js in the root directory. To start server run:

	npm run Start

This script will server your app from the produciton bundle in the public folder. To access the app visit 

	http://localhost:3000

**_Make sure to terminate the server when finished testing production bundle_**

to terminate the express server run:

	npm run stop







