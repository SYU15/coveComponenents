var React = require('react');
var ProgramColumn = require('./programColumn.js');

var ProgramColumns = React.createClass({
  getInitialState: function() {
    return {
     channel: 'KQED' 
    };
  },
  render: function() {
    var rows = this.props.data[this.state.channel].map(function(day, i){
      return <ProgramColumn data={day} key={i} />
    });

    return <div>{rows}</div>
  }
});

module.exports = ProgramColumns;
