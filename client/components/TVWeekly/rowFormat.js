var React = require('react');
var TimeCell = require('./timeCell.js');
var ProgramColumn = require('./programColumn.js');
var weeklyStore = require('../../stores/weeklyStores.js');
var MobileTimeHeader = require('./mobileTimeHeader.js');
var Dropdown = require('./dropdown.js');

var RowFormat = React.createClass({
  //weeklyStore sets current channel
  getInitialState: function() {
    return weeklyStore.getChannel();
  },
  getDefaultProps: function() {
    return {
     day: ["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm",]
   };
  },
  componentDidMount: function() {
    weeklyStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function() {
    weeklyStore.removeListener(this.onChange);
  },
  onChange: function() {
    this.setState(weeklyStore.getChannel());
  },
  render: function() {
    var rows = this.props.day.map((hour, i) => {
      return (
        <div key={i}>
          <TimeCell time={hour} />
        </div>
        );
    });
    var mobileHeaders = [];
    //checks to see if data is valid AJAX data
    if(this.props.data && Array.isArray(this.props.data[this.state.channel])) {
      var rows2 = this.props.data[this.state.channel].map((day, i) => {
        var header = <div className="computer tablet only two wide column" key={i}><MobileTimeHeader data={this.props.week[i]} /></div>;
        mobileHeaders.push(header);
        return (
          <div className="two wide column" key={i}>
              <div className="react-computer-hide"><MobileTimeHeader data={this.props.week[i]} /></div>
            <ProgramColumn data={day} position={i} />
          </div>
          );
      });
    } else if (this.props.data) { //if not valid, is an error
      var rows2 = <div className="ten wide column"><div className="ui error message"><div className="header"><i className="warning circle icon"></i>An error occurred. Please check back later.</div></div></div>
    }
    //shows loading wheel in places of rows2 if AJAX data hasn't loaded yet
    return (
        <div>
        <div className="ui equal width internally celled stackable grid react-menu-padding">
          <div className="two wide column"><Dropdown /></div>{mobileHeaders}
        </div>
          <div className="ui equal width internally celled stackable grid react-grid-scroll">
              <div className="two wide column"><div className="react-mobile-hide">{rows}</div></div>
              {rows2}
              <i className={rows2 === undefined ? 'huge notched circle loading icon react-center-icon' : ''}></i>
          </div>
        </div>
        );
  }
});

module.exports = RowFormat;
