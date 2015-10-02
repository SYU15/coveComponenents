var React = require('react');
var ProgramCell = require('./programCell.js');

var ProgramColumn = React.createClass({
  render: function() {
    var rows = this.props.data.map(function(program, i){
          return <div key={i}><ProgramCell data={program} /></div>
    });

    return <div>{rows}</div>
  }
});

module.exports = ProgramColumn;
