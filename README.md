# coveComponenents

## About
An extendable library of React Components ingesting KQED's media-api-service

## Requirements
- Node.js
- npm
- bower
- gulp
- nodemon

## Getting Started
- Clone/Fork the repo
- ``npm install``
- ``bower install``
- ``gulp`` 
  - This starts the browserify watch task and also starts up the server
  - browserify task watches for changes in the client folder and compiles the JSX from react into a bundle.js file in the public folder 
  - Must hit CTL + C twice to kill both processes in terminal
- Go to localhost:8000 in your browser
