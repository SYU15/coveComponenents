var React = require('react');
var moment = require('moment');

var DateDisplay = React.createClass({
      render: function() {
        var formatDay = moment(this.props.date, 'YYYYMMDD').format('MMM D');
        return <span><h3>{formatDay}</h3></span>
      }
});

module.exports = DateDisplay;
