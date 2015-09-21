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
  - Must hit CTL + C twice to kill processes in terminal
  - Watches for changes in bundle and refresh accordingly
- Go to localhost:3000 in browser 

## Export TV Schedule Tab
### This is a temporary workaround and will be refactored soon
- Create an output folder in the top level directory of the project
- In the terminal run ``gulp TVTab``
- The gulp task will create a tabs.js file in the output folder that you can use in projects
  - This React component will render with a element that has an id of 'TVTab'
