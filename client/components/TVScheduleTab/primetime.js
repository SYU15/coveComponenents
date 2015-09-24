var React = require('react');
var actions = require('../../actions/appActions.js');

var PrimeButton = React.createClass({
  clickHandler: function() {
    actions.primetime();
  },
  render: function() {
  return <a onClick={this.clickHandler} className="ui large basic label">Evening</a>
  }
});

module.exports = PrimeButton;
