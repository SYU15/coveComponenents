var React = require('react');
var TVScheduleTab = require('./firstComponent.js');

var TVTabWrapper = React.createClass({
  render: function() {
        return <TVScheduleTab source="http://mediaapiservice-vpc.elasticbeanstalk.com/v1.0/tv/listings/kqed/20150918" />
    }
});

module.exports = TVTabWrapper;
