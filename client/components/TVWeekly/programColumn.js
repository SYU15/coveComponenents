var React = require('react');
var ProgramCell = require('./programCell.js');

var ProgramColumn = React.createClass({
  render: function() {
    // console.log(this.props.data);
    var rows = this.props.data.map(function(program, i){
          return <ProgramCell data={program} />
    });

    return <div>{rows}</div>
  }
});

module.exports = ProgramColumn;
