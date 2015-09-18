var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var TVScheduleTab = require('../components/TVScheduleTab/firstComponent.js');
var Main = require('../components/main/main.js');
var Home = require('../components/home/home.js');

module.exports = (
  <Route name="main" path="/" handler={Main}>
    <Route name="TVTabs" path="tabs" handler={TVScheduleTab} />
    <DefaultRoute handler={Home} />
  </Route>
);

