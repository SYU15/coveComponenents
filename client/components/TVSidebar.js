var React = require('react');
var SidebarEntry = require('./sidebarEntry.js');
var data = require('../../data/data.js');

var TVSidebar = React.createClass({

        getInitialState: function() {
          return { data: [
              {station: "Station 1"},
              {station: "Station 2"},
              {station: "Station 3"},
              {station: "Station 4"}
            ]};
        },

        componentDidMount: function() {
          //add data from server here
          // $.get
          if(this.isMounted()) {
            var newData = [];
            for(var key in data) {
              newData.push({station: key});
            }
            this.setState({
              data: newData
            });
          }
        },

        render: function() {
          var rows = this.state.data.map(function(station, i){
            return <SidebarEntry data={station} key={station.station}></SidebarEntry> 
          });
          return <div className="ui large celled list three wide column">{rows}</div>          
        }
      });

module.exports = TVSidebar;

