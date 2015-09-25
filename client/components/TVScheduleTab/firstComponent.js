var React = require('react');
var $ = require('jquery');
var tab = require('tab');

var TVStream = require('./TVStream.js');
var SidebarEntry = require('./sidebarEntry.js');
var DatePicker = require('./datePicker.js');
var PrimeButton = require('./primetime.js');

var First = React.createClass({

      getDefaultProps: function() {
        return { apiData: [
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
      },

      componentDidUpdate: function() {
        $('.menu .item').tab();
      },

      render: function() {

          var sidebarStations = [];
          var rows = this.props.apiData.map(function(station, i){
            sidebarStations.push(<SidebarEntry data={station.station} key={station.station}></SidebarEntry>);
            return <TVStream data={station} key={station.station}></TVStream>
          });

          return (
            <div className="ui one column center aligned page grid">
              <div className="fourteen wide column">
                 <div className="ui pointing secondary tabs menu">
                  {sidebarStations}
                  <DatePicker date={this.props.date}/>
                  <PrimeButton />
                </div>
                  {rows === undefined ? 'loading...' : rows}
                <i className={rows === undefined ? 'huge notched circle loading icon' : ''}></i>
              </div>
            </div>
            );
        }
    });

module.exports = First;
