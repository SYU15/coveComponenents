var React = require('react');
var TVList = require('./TVList.js');

var TVStream = React.createClass({
      render: function() {
        var shouldShow = this.props.shouldShow;
        console.log(shouldShow);
        var rows = this.props.data.shows.map(function(show, i){
          return <TVList shouldShow={shouldShow} data={show} key={show.id}></TVList> 
        });
        
        return <div data={this.props.data} className={this.props.data.station === 'KQED' ? 'ui bottom attached active tab segments react-schedule-tab' : 'ui bottom attached tab segments react-schedule-tab'} data-tab={this.props.data.station}>{rows}</div>          
      }
  });

module.exports = TVStream;
