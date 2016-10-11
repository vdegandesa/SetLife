# SetLife

Boiler plate for React web app

Libaries used: Express, React, Redux, React Router, Webpack


## Getting Started

Clone repo https://github.com/brgarciarivas/SetLife.git

cd **setlife**

Install all dependencies `npm install` 

##Directory Layout

Get familiar witht the **setlife** folder structure

```
|-- /public/ #Folder holds all compiled and static files such as fonts and images
```

#Usage

##Development

Run command `npm run dev` to start webpack-dev-server , for custom configuration go to webpack.config.js

`npm run dev`

open http://localhost:8080/webpack-dev-server/

Entry point Setlife/src/components/App



##Production

`npm run deploy`

bundle will reside in `Setlife/public` 

*All static files such as images and fonts are in public folder*

##Testing Production bundle 

`npm run start`

`open http://localhost:3000`

will start server, runs on bundle files in public

`npm run stop` to halt server 



