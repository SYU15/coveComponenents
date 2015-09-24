var React = require('react');
var TVScheduleTab = require('./firstComponent.js');
var moment = require('moment');
var tabStore = require('../../stores/tabStores.js');

var TVTabWrapper = React.createClass({
  getInitialState: function() {
    return tabStore.getApiData();
  },
  componentDidMount: function() {
    tabStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function() {
    tabStore.removeChangeListener(this.onChange);
  },
  onChange: function() {
    this.setState(tabStore.getApiData());
  },
  render: function() {
      return <TVScheduleTab apiData={this.state.apiData} date={this.state.date} />
    }
});

module.exports = TVTabWrapper;
