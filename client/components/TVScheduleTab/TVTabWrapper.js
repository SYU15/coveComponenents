var React = require('react');
var TVScheduleTab = require('./firstComponent.js');
var moment = require('moment');

var TVTabWrapper = React.createClass({
  getDefaultProps: function() {
    return {
      source: 'http://mediaapiservice-vpc.elasticbeanstalk.com/v1.0/tv/listings/kqed/',
      day: moment().format('YYYYMMDD')
    };
  },
  render: function() {
      return <TVScheduleTab source={this.props.source} date={this.props.day} />
    }
});

module.exports = TVTabWrapper;
