var React = require('react');
var WeeklyTable = require('./weeklyTable.js');
var dataUtils = require('../../utils/dataProcessing.js');
var data = require('../../../data/data.js');

var WeeklyWrapper = React.createClass({
  getInitialState: function() {
    return {
     apiData: dataUtils.weeklyListings(data) 
    };
  },
  // componentDidMount: function() {
  //   if(this.isMounted()) {
  //     tabStore.addChangeListener(this.onChange);
  //     actions.getData(this.state.apiCall);
  //   }
  // },
  // componentWillUnmount: function() {
  //   tabStore.removeChangeListener(this.onChange);
  // },
  // onChange: function() {
  //   this.setState(tabStore.getApiData());
  // },
  render: function() {
      return (
        <div>
          <WeeklyTable data={this.state.apiData}/>
        </div>
        );
    }
});

module.exports = WeeklyWrapper;
