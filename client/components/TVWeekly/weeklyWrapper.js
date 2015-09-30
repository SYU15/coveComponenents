var React = require('react');
var WeeklyTable = require('./weeklyTable.js');

var WeeklyWrapper = React.createClass({
  // getInitialState: function() {
  //   return tabStore.getApiData();
  // },
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
          <WeeklyTable />
        </div>
        );
    }
});

module.exports = WeeklyWrapper;
