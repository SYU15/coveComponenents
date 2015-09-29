var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var ComponentButton = require('./componentButton.js');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <div className="ui center aligned basic segment"><h2>Select Your Component</h2></div>
        <ComponentButton routing="TVTabs" buttonName="Daily Schedule" />
        <ComponentButton routing="WeeklySchedule" buttonName="Weekly Schedule" />
      </div>
    );
  }
});

module.exports = Home;
