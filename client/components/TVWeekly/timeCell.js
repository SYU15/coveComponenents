var React = require('react');

var TimeCell = React.createClass({ 
  render: function() {
    return <div className="react-cell"><h2 className="ui header">{this.props.time}</h2></div>
  }
});

module.exports = TimeCell;
