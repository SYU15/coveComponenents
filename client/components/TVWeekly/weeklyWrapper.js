var React = require('react');
var WeeklyTable = require('./weeklyTable.js');
var weeklyStore = require('../../stores/weeklyStores.js');
var actions = require('../../actions/appActions.js');

var WeeklyWrapper = React.createClass({
  //gets API data from weekly endpoint
  getInitialState: function() {
     return weeklyStore.getApiData();
  },
  componentDidMount: function() {
    if(this.isMounted()) {
      weeklyStore.addChangeListener(this.onChange);
      actions.getWeeklyData();
    }
  },
  componentWillUnmount: function() {
    weeklyStore.removeChangeListener(this.onChange);
  },
  onChange: function() {
    this.setState(weeklyStore.getApiData());
  },
  render: function() {
      return (
        <div>
          <WeeklyTable data={this.state.apiData}/>
        </div>
        );
    }
});

module.exports = WeeklyWrapper;
