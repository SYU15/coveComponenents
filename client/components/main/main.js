var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Main = React.createClass({
  render: function() {
    return (
      <div className = "sixteen wide column">
        <h1>Select your component</h1>
        <RouteHandler />
      </div>
      );
  }
});

module.exports = Main;
