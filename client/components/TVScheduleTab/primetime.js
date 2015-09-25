var React = require('react');
var actions = require('../../actions/appActions.js');
var tabStore = require('../../stores/tabStores.js');
var actions = require('../../actions/appActions.js');
var $ = require('jquery');

var PrimeButton = React.createClass({
  getInitialState: function() {
    return tabStore.getToggle();
  },
  componentDidMount: function() {
    tabStore.addChangeListener(this.onChange);
    actions.primetime();
  },
  componentWillUnmount: function() {
    tabStore.removeListener(this.onChange);
  },
  onChange: function() {
    this.setState(tabStore.getToggle());
    this.showHide(this.state.shouldShow);
  },
  showHide: function(state) {
    if(state) {
      $('.react-should-hide').show();
    } else {
      $('.react-should-hide').hide();
    }
  },
  clickHandler: function() {
    actions.primetime();
  },
  render: function() {
  return (
    <a onClick={this.clickHandler} className="ui large basic label">
      {this.state.shouldShow === true ? 'Full Schedule' : 'Evening'}
    </a>
    );
  }
});

module.exports = PrimeButton;
