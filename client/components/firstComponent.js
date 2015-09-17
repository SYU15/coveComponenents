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
        // $.get

        if(this.isMounted()) {
          var newStations = [];
          var id = 0;
          for(var key in TVData) {
              var newStation = {station: key, shows: []};
              var listings = TVData[key].listings;
            for(var i = 0; i < listings.length; i++) {
              newStation.shows.push({id: id, show: listings[i].title, time: listings[i].start_time, description: listings[i].description});
              id++;
            }
            newStations.push(newStation);
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
            <div className="eight wide column">
              <div className="ui seven item stackable tabs menu">
                {sidebarStations}
              </div>
                {rows}
            </div>
            );
        }
    });

module.exports = First;
