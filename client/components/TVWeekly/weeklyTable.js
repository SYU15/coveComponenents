var React = require('react');
var Dropdown = require('./dropdown.js');
var RowFormat = require('./rowFormat.js');
var timeUtils = require('../../utils/timeProcessing.js');

var WeeklyTable = React.createClass({
  //timeUtils returns a weekly array with dates starting from today
  getDefaultProps: function() {
    return {
     week: timeUtils.weekCalculation()
   };
  },
  render: function() {
      return(
          <div> 
            <RowFormat data={this.props.data} week={this.props.week} />
        </div>
        );
    }
});

module.exports = WeeklyTable;
