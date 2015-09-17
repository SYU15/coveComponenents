var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var TVScheduleTab = require('../components/TVScheduleTab/firstComponent.js');
var Main = require('../components/main/main.js');

module.exports = (
  <Route name="main" path="/" handler={Main}>
    <DefaultRoute handler={TVScheduleTab} />
  </Route>
);

