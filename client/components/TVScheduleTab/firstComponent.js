var React = require('react');
var $ = require('jquery');
var sui = require('sui');

var TVStream = require('./TVStream.js');
var SidebarEntry = require('./sidebarEntry.js');
var utils = require('../../utils/dataProcessing.js');

var First = React.createClass({

      getInitialState: function() {
        return { stations: [
            {station: "KQED", shows: [{id: 1, show: "Show1"}, {id: 2, show: "Show2"}]},
            {station: "KQEDK", shows: [{id: 2, show: "Show2"}]},
            {station: "KQEDL", shows: [{id: 3, show: "Show3"}]},
            {station: "KQEDV", shows: [{id: 4, show: "Show4"}]},
            {station: "KQEDDT3", shows: [{id: 5, show: "Show5"}]},
            {station: "KQEDDT2", shows: [{id: 6, show: "Show6"}]}
          ]
        };
      },

      componentDidMount: function() {
        //implements semantic ui javascript behavior
        $('.menu .item').tab();

        var TVData = {};
        $.get(this.props.source, function(result) {
          TVData = result.data;

          if(this.isMounted()) {

            var newStations = utils.dailyListings(TVData);

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
