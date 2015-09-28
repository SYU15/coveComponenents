var React = require('react');
var moment = require('moment');

var DateDisplay = React.createClass({
      render: function() {
        var formatDay = moment(this.props.date, 'YYYYMMDD').format('MMM D');
        return <div><h3>{formatDay}</h3></div>
      }
});

module.exports = DateDisplay;
