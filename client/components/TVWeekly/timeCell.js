var React = require('react');

var TimeCell = React.createClass({ 
  render: function() {
    return <td className="react-cell-padded"><h2 className="ui header">{this.props.time}</h2></td>
  }
});

module.exports = TimeCell;
