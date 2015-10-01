var React = require('react');
var TimeCell = require('./timeCell.js');
var ProgramColumn = require('./programColumn.js');

var RowFormat = React.createClass({
  getInitialState: function() {
    return {
     channel: 'KQED' 
    };
  },
  getDefaultProps: function() {
    return {
     day: ["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm",]
   };
  }, 
  render: function() {
    var data = this.props.data;

    var rows = this.props.day.map(function(hour, i){
      return <TimeCell time={hour} key={i} />
    });

    var rows2 = this.props.data[this.state.channel].map(function(day, i){
      return <div className="two wide column"><ProgramColumn data={day} key={i} /></div>
    });
    return <div className="ui grid"><div className="two wide column">{rows}</div>{rows2}</div>
  }
});

module.exports = RowFormat;
