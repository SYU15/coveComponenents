var React = require('react');
var moment = require('moment');
var calAPI = require('../../utils/calendarApi.js');
var dataUtils = require('../../utils/dataProcessing.js');
var actions = require('../../actions/appActions.js');

var ProgramCell = React.createClass({
  getInitialState: function() {
    return {
      dropdown: false
    };
  },
  getDefaultProps: function() {
    return {
      currentTime: moment().format('HHmm')
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
  },
  componentDidMount: function() {
    if(this.isMounted() && this.props.position === 0 && dataUtils.currentShow(this.props.data.start_time, this.props.data.minutes, this.props.currentTime, 'KQED')) {
      var anchorPosition = document.getElementById('react-weekly-anchor').offsetTop;
      var setScroll = function() {
        actions.setWeeklyScroll(anchorPosition);
      };
      setTimeout(setScroll, 100);
    }
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
    var description = this.props.data.episode_description || this.props.data.description;
    
    return (
      <div style={divStyle} className="react-cell" onClick={this.hideDropdown} id={this.props.position !== 0 ? "" : !dataUtils.currentShow(this.props.data.start_time, this.props.data.minutes, this.props.currentTime, 'KQED') ? "" : "react-weekly-anchor"}>
      <div className="ui basic segment" onClick={this.show} style={divStyle}>
          <h5 className="ui header">{this.props.data.title}
            <div className="sub header" onClick={this.show}>{this.formatTime(this.props.data.start_time)}</div>
            <i className="react-small-description">{this.props.data.episode_title ? this.shortenTitle(this.props.data.episode_title) : ''}</i>
          </h5>
          <div className="ui bottom attached basic label addthisevent-drop" onClick={this.dropdownToggle}>
            <i className="small calendar outline icon"><span className="addthisevent-title">Add to Cal</span></i>
            <span className={this.state.dropdown ? "addthisevent_dropdown addthisevent_show" : "addthisevent_dropdown"}>
              <a className="ateappleical" href={calAPI('appleical', this.props.data.timestamp, this.props.data.minutes, this.props.data.title, description)}>Apple iCalendar</a>
              <a className="ategoogle" target="_blank" href={calAPI('google', this.props.data.timestamp, this.props.data.minutes, this.props.data.title, description)}>Google</a>
              <a className="ateoutlook" href={calAPI('outlook', this.props.data.timestamp, this.props.data.minutes, this.props.data.title, description)}>Outlook</a>
              <a className="ateoutlookcom" target="_blank" href={calAPI('outlookcom', this.props.data.timestamp, this.props.data.minutes, this.props.data.title, description)}>Outlook.com</a>
              <a className="ateyahoo" target="_blank" href={calAPI('yahoo', this.props.data.timestamp, this.props.data.minutes, this.props.data.title, description)}>Yahoo</a>
            </span>
          </div>
        </div>
      </div>
      );
  }
});

module.exports = ProgramCell;
