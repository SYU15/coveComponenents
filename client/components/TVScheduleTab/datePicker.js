var React = require('react');
var DateDisplay =require('./dateDisplay.js');
var Arrow = require('./arrow.js');

var DatePicker = React.createClass({
  clickHandler: function() {
    console.log('called')
    console.log(direction);
  },
  render: function() {
  return (
    <div className="three column grid">
      <Arrow direction="past" clickHandler={this.clickHandler.bind(this, this.props.direction)} />
      <DateDisplay date={this.props.date} />
      <Arrow direction="future" clickHandler={this.clickHandler.bind(this, this.props.direction)}/>
    </div>
    );  
  }
});

module.exports = DatePicker;
