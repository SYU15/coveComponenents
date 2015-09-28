var React = require('react');
var $ = require('jquery');
var tab = require('tab');

var TVStream = require('./TVStream.js');
var SidebarEntry = require('./sidebarEntry.js');
var DatePicker = require('./datePicker.js');
var PrimeButton = require('./primetime.js');
var primeStore = require('../../stores/primeStores.js');

var First = React.createClass({

      getInitialState: function() {
        return primeStore.getToggle();
      },
      componentWillUnmount: function() {
        primeStore.removeListener(this.onChange);
      },
      onChange: function() {
        this.setState(primeStore.getToggle());
      },
      componentDidMount: function() {
        primeStore.addChangeListener(this.onChange);
        //implements semantic ui javascript behavior
        $('.menu .item').tab();
      },

      componentDidUpdate: function() {
        $('.menu .item').tab();
      },

      render: function() {
          var shouldShow = this.state.shouldShow;
          var sidebarStations = [];
          if(this.props.apiData) {
            var rows = this.props.apiData.map(function(station, i){
              sidebarStations.push(<SidebarEntry data={station.station} key={station.station}></SidebarEntry>);
              return <TVStream shouldShow={shouldShow} data={station} key={station.station}></TVStream>
            });
          }
          return (
            <div className="ui one column center aligned page grid">
              <div className="fourteen wide column">
                 <div className="ui pointing secondary tabs menu">
                  {sidebarStations}
                  <DatePicker date={this.props.date}/>
                  <PrimeButton />
                </div>
                  {rows === undefined ? '' : rows}
                <i className={rows === undefined ? 'huge notched circle loading icon' : ''}></i>
              </div>
            </div>
            );
        }
    });

module.exports = First;
