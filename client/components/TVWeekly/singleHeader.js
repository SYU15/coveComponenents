var React = require('react');

var SingleHeader = React.createClass({

  render: function() {
  return (
   
      <h3 className="ui header">{this.props.data.day}
        <div className="ui sub header">{this.props.data.month}/{this.props.data.date}</div>
      </h3>
    );
  }

});

module.exports = SingleHeader;
