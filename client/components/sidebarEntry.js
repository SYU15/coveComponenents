var React = require('react');

var SidebarEntry = React.createClass({
        render: function() {
          return (
            <div className="item"><div className="header">{this.props.data.station}</div></div>
            );
        }
});

module.exports = SidebarEntry;

