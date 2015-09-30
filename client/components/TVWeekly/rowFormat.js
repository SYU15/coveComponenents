var React = require('react');
var TimeCell = require('./timeCell.js');
var ProgramColumns = require('./programColumns.js');

var RowFormat = React.createClass({
  getDefaultProps: function() {
    return {
     day: ["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm",]
   };
  }, 
  render: function() {
    var data = this.props.data;
    var rows = this.props.day.map(function(hour, i){
      return <tr key={i}><TimeCell time={hour} /></tr>
    });

    return <div>{rows}<ProgramColumns data={data} /></div>
  }
});

module.exports = RowFormat;
