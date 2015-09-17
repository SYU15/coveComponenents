var React = require('react'); 

// var First = require('./components/TVScheduleTab/firstComponent.js');

// React.render(<First />, document.getElementById('firstComponent'));

var Router = require('react-router');
var routes = require('./config/routes');

Router.run(routes, function(Root){
  React.render(<Root />, document.getElementById('firstComponent'));
});
