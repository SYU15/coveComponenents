var React = require('react');
var Dropdown = require('./dropdown.js');
var DateHeaders = require('./dateHeaders.js');
var RowFormat = require('./rowFormat.js');

var WeeklyTable = React.createClass({ 
    
    render: function() {
      return(
        <table className="ui celled fixed table">
          <thead>
            <th><Dropdown /></th>
            <DateHeaders />
          </thead>
          <tbody className="react-table-scroll">
          <RowFormat data={this.props.data} />
          </tbody>
        </table>
        );
    }
});

module.exports = WeeklyTable;
