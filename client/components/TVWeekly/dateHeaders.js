var React = require('react');
var timeUtils = require('../../utils/timeProcessing.js');
var SingleHeader = require('./singleHeader.js');

var DateHeaders = React.createClass({

  getDefaultProps: function() {
    return {
     week: timeUtils.weekCalculation()
   };
  },
  render: function() {
    var rows = this.props.week.map(function(day, i){
      return <SingleHeader data={day} />
    });

    return <div>{rows}</div>
  }

});

module.exports = DateHeaders;
