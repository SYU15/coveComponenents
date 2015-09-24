var React = require('react');
var TVScheduleTab = require('./firstComponent.js');
var moment = require('moment');
var tabStore = require('../../stores/tabStores.js');

var TVTabWrapper = React.createClass({
  getInitialState: function() {
    return tabStore.getApiParams();
  },
  componentDidMount: function() {
    tabStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function() {
    tabStore.removeChangeListener(this.onChange);
  },
  onChange: function() {
    this.setState(tabStore.getApiParams());
  },
  render: function() {
      return <TVScheduleTab source={this.state.apiCall} date={this.state.date} />
    }
});

module.exports = TVTabWrapper;
