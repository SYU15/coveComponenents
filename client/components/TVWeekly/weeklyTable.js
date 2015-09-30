var React = require('react');
var Dropdown = require('./dropdown.js');
var DateHeaders = require('./dateHeaders.js');
var TimeColumn = require('./timeColumn.js');

var WeeklyTable = React.createClass({ 
    
    render: function() {
      return(
        <table className="ui celled fixed table">
          <thead>
            <th><Dropdown /></th>
            <DateHeaders />
          </thead>
          <tbody>
          <TimeColumn />
          </tbody>
        </table>
        );
    }
});

module.exports = WeeklyTable;
