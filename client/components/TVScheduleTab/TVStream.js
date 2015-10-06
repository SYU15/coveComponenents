var React = require('react');
var TVList = require('./TVList.js');
var $ = require('jquery');

var TVStream = React.createClass({
      getInitialState: function() {
       return {
        firstLoad: true
       };
      },
      componentDidMount: function() {
        var anchor = document.getElementById('anchor') || null;
        var tabs = $('.react-schedule-tab');
        //when component mounted the first time, set position of scrollbar to position of program that matches current time
        //should only happen during first load, afterward, lets scrollStores set scroll position based on user input
        if(this.state.firstLoad && anchor) {
          tabs.scrollTop(anchor.offsetTop);
          this.setState({firstLoad: false});
        }
      },
      render: function() {
        var rows = this.props.data.shows.map((show, i) => {
          return <TVList shouldShow={this.props.shouldShow} data={show} key={show.id}></TVList> 
        });
        
        return <div data={this.props.data} className={this.props.data.station === 'KQED' ? 'ui bottom attached active tab segments react-schedule-tab' : 'ui bottom attached tab segments react-schedule-tab'} data-tab={this.props.data.station}>{rows}</div>          
      }
  });

module.exports = TVStream;
