var React = require('react');
var Dropdown = require('./dropdown.js');

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
          <Dropdown />
        </div>
        );
    }
});

module.exports = WeeklyWrapper;
