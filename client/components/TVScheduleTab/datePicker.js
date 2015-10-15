var React = require('react');
var DateDisplay =require('./dateDisplay.js');
var Arrow = require('./arrow.js');

var DatePicker = React.createClass({
  render: function() {
  return (
    <div className="three wide column">
      <div className="column">
        <div className="ui three column grid">
          <div className="three column row">
            <Arrow direction="previous" />
            <DateDisplay date={this.props.date} />
            <Arrow direction="next" />
          </div>
        </div>
      </div>
    </div>
    );  
  }
});

module.exports = DatePicker;
