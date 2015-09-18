var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Main = React.createClass({
  mixins: [Router.Navigation],
  clickHandler: function() {
    this.transitionTo('main');
  },
  render: function() {
    return (
      <div className = "sixteen wide column">
        <div className="ui center aligned inverted purple segment"><h1 className="clickable" onClick={this.clickHandler}>KQED React Components</h1></div>
        <RouteHandler />
      </div>
      );
  }
});

module.exports = Main;
