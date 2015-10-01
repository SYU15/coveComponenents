var React = require('react');
var moment = require('moment');

var ProgramCell = React.createClass({
  formatTime: function(time) {
    return moment(time, 'HHmm').format('h:mm A');
  },
  render: function() {
    return (
      <h4 className="ui header">{this.props.data.title}
      <div className="ui sub header">{this.formatTime(this.props.data.start_time)}</div>
      </h4>
      );
  }
});

module.exports = ProgramCell;
