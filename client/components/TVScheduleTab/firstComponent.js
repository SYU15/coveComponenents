var React = require('react');
var TVStream = require('./TVStream.js');
// var TVData = require('../../../data/data.js');
var SidebarEntry = require('./sidebarEntry.js');
var $ = require('jquery');
var sui = require('sui');

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
        //can use AJAX call instead of processing static data
        $('.menu .item').tab();
        var TVData = {};
        $.get(this.props.source, function(result) {
          TVData = result.data;
          // console.log(result.data);
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
        }.bind(this));
      },

      componentDidUpdate: function() {
        $('.menu .item').tab();
      },

      render: function() {
          var sidebarStations = [];
          
          var rows = this.state.stations.map(function(station, i){
            sidebarStations.push(<SidebarEntry data={station.station} key={station.station}></SidebarEntry>);
            return <TVStream data={station} key={station.station}></TVStream>
          });

          return (
            <div className="ui one column center aligned page grid">
              <div className="fourteen wide column">
                <div className="ui seven item stackable tabs menu">
                  {sidebarStations}
                </div>
                  {rows}
              </div>
            </div>
            );
        }
    });

module.exports = First;
