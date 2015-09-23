var React = require('react');

var Arrow = React.createClass({
  render: function() {
    return (
      <i className={this.props.direction === 'past' ? 'chevron icon left' : 'chevron icon right'} onClick={this.props.clickHandler}>
      </i>
      )
  }
});

module.exports = Arrow;
