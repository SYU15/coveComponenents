var React = require('react');
var DateDisplay =require('./dateDisplay.js');
var Arrow = require('./arrow.js');

var DatePicker = React.createClass({
  render: function() {
  return (
      <div className="six wide computer tablet five wide mobile column">
      <div className="ui three column centered grid">
          <div className="row">
            <Arrow direction="previous" />
            <DateDisplay date={this.props.date} />
            <Arrow direction="next" />
          </div>
        </div>
      </div>
    );  
  }
});

module.exports = DatePicker;
