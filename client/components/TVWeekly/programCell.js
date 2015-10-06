var React = require('react');
var moment = require('moment');
var $ = require('jquery');

var ProgramCell = React.createClass({
  shortenTitle: function(title) {
    //shorten title for blocks less than 30 minutes long
    if(title.length > 50 && this.props.data.minutes < 30) {
      return title.slice(0, 50) + "...";
    } else if(this.props.data.minutes <=15) {
      return '';
    } else {
      return title;
    }
  },
  formatTime: function(time) {
    return moment(time, 'HHmm').format('h:mm A');
  },
  render: function() {
    var divStyle = {
          height: (150 * (this.props.data.minutes/30)).toString()
        };
    return (
      <div style={divStyle} className="react-cell">
      <div className="ui basic segment" onClick={this.show} style={divStyle}>
          <h5 className="ui header">{this.props.data.title}
            <div className="sub header" onClick={this.show}>{this.formatTime(this.props.data.start_time)}</div>
            <i className="react-small-description">{this.props.data.episode_title ? this.shortenTitle(this.props.data.episode_title) : ''}</i>
          </h5>
          <div className="addthisevent ui bottom attached basic label">
            <i className="small calendar outline icon"></i>
            Add to Cal
                <span className="start">{moment.unix(this.props.data.timestamp).format('MM/DD/YYYY hh:mm A')}</span>
                <span className="end">{moment.unix(this.props.data.timestamp).add(this.props.data.minutes, 'minutes').format('MM/DD/YYYY hh:mm A')}</span>
                <span className="timezone">America/Los_Angeles</span>
                <span className="title">{this.props.data.title}</span>
                <span className="description">{this.props.data.episode_description ? this.props.data.episode_description : this.props.data.description}</span>
                <span className="all_day_event">false</span>
                <span className="date_format">{moment.unix(this.props.data.timestamp).format('MM/DD/YYYY')}</span>
          </div>
        </div>
      </div>
      );
  }
});

module.exports = ProgramCell;
