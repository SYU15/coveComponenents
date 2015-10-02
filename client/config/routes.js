var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var TVTabWrapper = require('../components/TVScheduleTab/TVTabWrapper.js');
var Main = require('../components/main/main.js');
var Home = require('../components/home/home.js');
var WeeklyWrapper = require('../components/TVWeekly/weeklyWrapper.js');

module.exports = (
  <Route name="main" path="/" handler={Main}>
    <Route name="TVTabs" path="tabs" handler={TVTabWrapper} />
    <Route name="WeeklySchedule" path="weekly" handler={WeeklyWrapper} />
    <DefaultRoute handler={Home} />
  </Route>
);

