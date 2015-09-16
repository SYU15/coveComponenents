var React = require('react');

var TVList = React.createClass({
      render: function() {
        return <div className="ui blue segment">{this.props.data.show} {this.props.data.time}</div>
      }
});

module.exports = TVList;
