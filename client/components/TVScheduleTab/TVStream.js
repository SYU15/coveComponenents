var React = require('react');
var TVList = require('./TVList.js');

var TVStream = React.createClass({
      render: function() {
        var rows = this.props.data.shows.map(function(show, i){
          return <TVList data={show} key={show.id}></TVList> 
        });
        
        return <div data={this.props.data} className={this.props.data.station === 'KQED' ? 'ui bottom attached active tab segments schedule-tab' : 'ui bottom attached tab segments schedule-tab'} data-tab={this.props.data.station}>{rows}</div>          
      }
  });

module.exports = TVStream;
