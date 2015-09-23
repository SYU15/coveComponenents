var React = require('react'); 
var Router = require('react-router');

var ComponentButton = React.createClass({
  mixins: [Router.Navigation],

  propTypes: {
    buttonName: React.PropTypes.string.isRequired,
    routing: React.PropTypes.string.isRequired
  },

  clickHandler: function() {
    this.transitionTo(this.props.routing);
  },

  render: function() {
    return (
      <div className="ui one column center aligned page grid">
        <div className="ui center aligned violet inverted compact segment react-clickable" onClick={this.clickHandler}>
          <h3>{this.props.buttonName}</h3>
        </div>
      </div> 
    );
  }
});

module.exports = ComponentButton;
