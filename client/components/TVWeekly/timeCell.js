var React = require('react');

var TimeCell = React.createClass({ 
  render: function() {
    return <h2 className="ui header">{this.props.time}</h2>
  }
});

module.exports = TimeCell;
