var React = require('react');

var TimeCell = React.createClass({ 
  render: function() {
    return <div className="react-cell"><div className="ui basic center aligned segment"><h2 className="ui header">{this.props.time}</h2></div></div>
  }
});

module.exports = TimeCell;
