var React = require('react');
var moment = require('moment');

var ProgramCell = React.createClass({
  formatTime: function(time) {
    return moment(time, 'HHmm').format('h:mm A');
  },
  render: function() {
    var divStyle = {
          height: (100 * (this.props.data.minutes/30)).toString()
        };
    return (
      <div style={divStyle} className="react-cell">
      <div className="ui basic segment" style={divStyle}>
          <h5 className="ui header">{this.props.data.title}
            <div className="sub header">{this.formatTime(this.props.data.start_time)}</div>
            <i className="react-small-description">{this.props.data.episode_title}</i>
          </h5>
          <div className="ui bottom attached basic label react-clickable">
            <i className="small calendar outline icon"></i>
            Add to Calendar
            </div>
        </div>
      </div>
      );
  }
});

module.exports = ProgramCell;
