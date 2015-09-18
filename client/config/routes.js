var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
// var TVScheduleTab = require('../components/TVScheduleTab/firstComponent.js');
var TVTabWrapper = require('../components/TVScheduleTab/TVTabWrapper.js');
var Main = require('../components/main/main.js');
var Home = require('../components/home/home.js');

module.exports = (
  <Route name="main" path="/" handler={Main}>
    <Route name="TVTabs" path="tabs" handler={TVTabWrapper} />
    <DefaultRoute handler={Home} />
  </Route>
);

