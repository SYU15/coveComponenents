var React = require('react');
var moment = require('moment');
var calAPI = require('../../utils/calendarApi.js');
var dataUtils = require('../../utils/dataProcessing.js');

var ProgramCell = React.createClass({
  getInitialState: function() {
    return {
      dropdown: false
    };
  },
  shortenTitle: function(title) {
    //shorten title for blocks less than 30 minutes long
    if(title.length > 50 && this.props.data.minutes < 30) {
      return title.slice(0, 50) + "...";
    } else if(this.props.data.minutes <=15) { //if program is less than 15 minutes, don't display episode title
      return '';
    } else {
      return title;
    }
  },
  formatTime: function(time) {
    return moment(time, 'HHmm').format('h:mm A');
  },
  calendarHandler: function(calendarType) {
    var description = this.props.data.episode_description || this.props.data.description;
    calAPI(calendarType, this.props.data.timestamp, this.props.data.minutes, this.props.data.title, description);
  },
  hideDropdown: function() {
    if(this.state.dropdown) {
      this.setState({dropdown: false});
    }
  },
  dropdownToggle: function() {
    this.setState({dropdown: !this.state.dropdown});
  },
  render: function() {
    //sets height of each program based on number of minutes
    var divStyle = {
          height: (150 * (this.props.data.minutes/30)).toString()
        };
    var current = moment().format('HHmm');  
    return (
      <div style={divStyle} className="react-cell" onClick={this.hideDropdown} id={this.props.position === 0 ? dataUtils.currentShow(this.props.data.start_time, this.props.data.minutes, current, 'KQED') : '' ? 'react-weekly-anchor':''}>
      <div className="ui basic segment" onClick={this.show} style={divStyle}>
          <h5 className="ui header">{this.props.data.title}
            <div className="sub header" onClick={this.show}>{this.formatTime(this.props.data.start_time)}</div>
            <i className="react-small-description">{this.props.data.episode_title ? this.shortenTitle(this.props.data.episode_title) : ''}</i>
          </h5>
          <div className="ui bottom attached basic label addthisevent-drop" onClick={this.dropdownToggle}>
            <i className="small calendar outline icon"><span className="addthisevent-title">Add to Cal</span></i>
            <span className={this.state.dropdown ? "addthisevent_dropdown addthisevent_show" : "addthisevent_dropdown"}>
              <span className="ateappleical" onClick={this.calendarHandler.bind(this,'appleical')}>Apple iCalendar</span>
              <span className="ategoogle" onClick={this.calendarHandler.bind(this,'google')}>Google</span>
              <span className="ateoutlook" onClick={this.calendarHandler.bind(this,'outlook')}>Outlook</span>
              <span className="ateoutlookcom" onClick={this.calendarHandler.bind(this,'outlookcom')}>Outlook.com</span>
              <span className="ateyahoo" onClick={this.calendarHandler.bind(this,'yahoo')}>Yahoo</span>
            </span>
          </div>
        </div>
      </div>
      );
  }
});

module.exports = ProgramCell;
