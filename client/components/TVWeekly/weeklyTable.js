var React = require('react');
var Dropdown = require('./dropdown.js');
var RowFormat = require('./rowFormat.js');
var SingleHeader = require('./singleHeader.js');
var timeUtils = require('../../utils/timeProcessing.js');

var WeeklyTable = React.createClass({
  getDefaultProps: function() {
    return {
     week: timeUtils.weekCalculation()
   };
  },
  render: function() {
    var rows = this.props.week.map(function(day, i){
      return <div className="item" key={i}><SingleHeader data={day} /></div>
    });     
      return(
          <div> 
          <div className="ui eight item equal width stackable attached menu">       
            <Dropdown />
            {rows}
          </div>
            <RowFormat data={this.props.data} />
        </div>
        );
    }
});

module.exports = WeeklyTable;
