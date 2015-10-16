var React = require('react');
var calAPI = require('../../utils/calendarApi.js');

var TVList = React.createClass({
      getInitialState: function() {
        return {
          dropdown: false
        };
      },
      componentWillReceiveProps: function() {
        this.hideDropdown();
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
        //inline style to calculate height of entry based on number of minutes
        var divStyle = {
          height: (100 * Math.round(this.props.data.minutes/30)).toString()
        };

        var description = this.props.data.episode || this.props.data.description;
        //only add anchor id to entry that broadcast time is within is current time range
        return (
          <div id={this.props.data.shouldAnchor ? "anchor" : ""} onClick={this.hideDropdown}>
            <div className={!this.props.data.isPrime && !this.props.shouldShow ? "react-should-hide" : ""}>
                  <div style={divStyle} className = {this.props.data.id % 2 === 0 ? "ui secondary segment react-full-width" : "ui segment react-full-width"}>
                    <div>
                      <div className="ui dividing header">{this.props.data.show}</div>
                      {this.props.data.time}
                    </div>
                    <p><i>{this.props.data.episode}</i></p>
                    <div className="ui bottom right attached basic label addthisevent-drop" onClick={this.dropdownToggle}>
                      <i className="small calendar outline icon"></i><span className="addthisevent-title">Add to Cal</span>
                    <span className={this.state.dropdown ? "addthisevent_dropdown addthisevent_show addthisevent_dropdown_left" : "addthisevent_dropdown addthisevent_dropdown_left"}>
                      <a className="ateappleical" href={calAPI('appleical', this.props.data.timestamp, this.props.data.minutes, this.props.data.show, description)}>Apple iCalendar</a>
                      <a className="ategoogle" target="_blank" href={calAPI('google', this.props.data.timestamp, this.props.data.minutes, this.props.data.show, description)}>Google</a>
                      <a className="ateoutlook" href={calAPI('outlook', this.props.data.timestamp, this.props.data.minutes, this.props.data.show, description)}>Outlook</a>
                      <a className="ateoutlookcom" target="_blank" href={calAPI('outlookcom', this.props.data.timestamp, this.props.data.minutes, this.props.data.show, description)}>Outlook.com</a>
                      <a className="ateyahoo" target="_blank" href={calAPI('yahoo', this.props.data.timestamp, this.props.data.minutes, this.props.data.show, description)}>Yahoo</a>
                    </span>
                    </div>
                  </div>
            </div>
          </div>
          );
      }
});

module.exports = TVList;
