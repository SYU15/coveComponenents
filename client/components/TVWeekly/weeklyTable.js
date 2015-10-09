var React = require('react');
var $ = require('jquery');

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
  componentDidMount: function() {
    var anchor = document.getElementById('react-weekly-anchor') || null;
    var grid = $('react-grid-scroll');
    console.log('called');
    console.log(anchor);
    if(anchor) {
      grid.scrollTop(anchor.offsetTop);
    }
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
