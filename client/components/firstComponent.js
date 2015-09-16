var React = require('react');
var TVStream = require('./TVStream.js');
var TVSidebar = require('./TVSidebar.js');
var TVData = require('../../data/data.js');

var First = React.createClass({
      getInitialState: function() {
        return { stations: [
            {station: "Station 1"},
            {station: "Station 2"},
            {station: "Station 3"},
            {station: "Station 4"}
          ],
          shows: [
            {id: 1, show: "Show1"},
            {id: 2, show: "Show2"},
            {id: 3, show: "Show3"},
            {id: 4, show: "Show4"}
          ]
        };
      },

      componentDidMount: function() {
        //add stations from server here
        // $.get
        if(this.isMounted()) {
          var newStations = [];
          for(var key in TVData) {
            newStations.push({station: key});
          }
          this.setState({
            stations: newStations
          });
        }
      },

      render: function() {
          return (
            <div className="ui grid">
            <div className="row">
              <TVStream data={this.state.shows}></TVStream>
              <TVSidebar data={this.state.stations}></TVSidebar>
              </div>
            </div>
            );
        }
    });

module.exports = First;
