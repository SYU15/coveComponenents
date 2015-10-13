var React = require('react');
var $ = require('jquery');

var Dropdown = require('./dropdown.js');
var RowFormat = require('./rowFormat.js');
var timeUtils = require('../../utils/timeProcessing.js');
var weeklyScrollStore = require('../../stores/weeklyScrollStores.js');

var WeeklyTable = React.createClass({
  //timeUtils returns a weekly array with dates starting from today
  getDefaultProps: function() {
    return {
     week: timeUtils.weekCalculation()
   };
  },
  getInitialState: function() {
     return weeklyScrollStore.getScroll();
  },
  componentDidMount: function() {
    if(this.isMounted()) {
      weeklyScrollStore.addChangeListener(this.onChange);
    }
  },
  componentWillUnmount: function() {
    weeklyScrollStore.removeChangeListener(this.onChange);
  },
  onChange: function() {
    this.setState(weeklyScrollStore.getScroll());
    var grid = $('.react-grid-scroll');
    grid.scrollTop(this.state.scrollPosition);
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
