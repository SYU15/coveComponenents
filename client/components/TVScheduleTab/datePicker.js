var React = require('react');
var DateDisplay =require('./dateDisplay.js');

var DatePicker = React.createClass({ 
  render: function() {
  return (
    <div>
      <DateDisplay date={this.props.date}/>
    </div>
    );  
  }
});

module.exports = DatePicker;
