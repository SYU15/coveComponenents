var React = require('react');
var TVScheduleTab = require('./firstComponent.js');
var moment = require('moment');

var TVTabWrapper = React.createClass({
  render: function() {
      var today = moment().format("YYYYMMDD");
      return <TVScheduleTab source="http://mediaapiservice-vpc.elasticbeanstalk.com/v1.0/tv/listings/kqed/" date={today} />
    }
});

module.exports = TVTabWrapper;
