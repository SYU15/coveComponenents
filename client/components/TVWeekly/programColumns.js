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
      console.log('called');
      return <tr key={i}><ProgramColumn data={day} key={i} /></tr>
    });

    return <div>{rows}</div>
  }
});

module.exports = ProgramColumns;
