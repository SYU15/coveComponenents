var React = require('react');

var SidebarEntry = React.createClass({
        render: function() {
          return (
            <a className={this.props.data === 'KQED' ? 'active item' : 'item'} data-tab={this.props.data}>{this.props.data}</a>
            );
        }
});

module.exports = SidebarEntry;

