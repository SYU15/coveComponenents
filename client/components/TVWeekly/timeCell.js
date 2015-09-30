var React = require('react');

var TimeCell = React.createClass({ 
  render: function() {
    return <td>{this.props.time}</td>
  }
});

module.exports = TimeCell;
