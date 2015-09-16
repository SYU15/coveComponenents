var React = require('react');
var TVStream = require('./TVStream.js');
var TVData = require('../../data/data.js');
var SidebarEntry = require('./sidebarEntry.js');


var First = React.createClass({
      getInitialState: function() {
        return { stations: [
            {station: "Station 1", shows: [{id: 1, show: "Show1"}, {id: 2, show: "Show2"}]},
            {station: "Station 2", shows: [{id: 2, show: "Show2"}]},
            {station: "Station 3", shows: [{id: 3, show: "Show3"}]},
            {station: "Station 4", shows: [{id: 4, show: "Show4"}]}
          ]
        };
      },

      componentDidMount: function() {
        //add stations from server here
        // $.get
        if(this.isMounted()) {
          var newStations = [];
          for(var key in TVData) {
            newStations.push({station: key, shows: [{id: Math.random(), show: Math.random()}, {id: Math.random(), show: "Show2"}]});
          }
          this.setState({
            stations: newStations
          });
        }
      },

      render: function() {
          var sidebarStations = [];
          var rows = this.state.stations.map(function(station, i){
            sidebarStations.push(<SidebarEntry data={station.station} key={station.station}></SidebarEntry>);
            return <TVStream data={station} key={station.station}></TVStream>
          });
          return (
            <div>
              <div className="ui top attached tabular menu">
                {sidebarStations}
              </div>
                {rows}
            </div>
            );
        }
    });

module.exports = First;
