var React = require('react');
var DateDisplay =require('./dateDisplay.js');
var Arrow = require('./arrow.js');

var DatePicker = React.createClass({
  render: function() {
  return (
    <div className="three column grid react-date">
      <Arrow direction="previous" />
      <DateDisplay date={this.props.date} />
      <Arrow direction="next" />
    </div>
    );  
  }
});

module.exports = DatePicker;
