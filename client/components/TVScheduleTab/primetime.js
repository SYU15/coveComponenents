var React = require('react');
var actions = require('../../actions/appActions.js');
var primeStore = require('../../stores/primeStores.js');
var $ = require('jquery');

var PrimeButton = React.createClass({
  getInitialState: function() {
    return primeStore.getToggle();
  },
  componentDidMount: function() {
    primeStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function() {
    primeStore.removeListener(this.onChange);
  },
  onChange: function() {
    this.setState(primeStore.getToggle());
  },
  clickHandler: function() {
    $('.react-schedule-tab').scrollTop(0);
    actions.primetime();
  },
  render: function() {
  return (
    <div className="three wide column">
      <a onClick={this.clickHandler} className="ui large basic label">
        {this.state.shouldShow === true ? 'Evening' : 'Full Schedule'}
      </a>
    </div>
    );
  }
});

module.exports = PrimeButton;
