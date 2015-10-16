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
          var sidebarStations = [];
          //check to see if AJAX data has loaded
          if(this.props.apiData && Array.isArray(this.props.apiData)) {
            var rows = this.props.apiData.map((station, i) => {
              sidebarStations.push(<SidebarEntry data={station.station} key={station.station}></SidebarEntry>);
              return <TVStream shouldShow={this.state.shouldShow} data={station} key={station.station}></TVStream>
            });
          } else if (this.props.apiData) { //if data has loaded, but not in correct structure, then error event has been fired
            var rows = <div className="ui error message"><div className="header"><i className="warning circle icon"></i>An error occurred. Please check back later.</div></div>
          }
          return (
            <div className="ui one column grid">
              <div className="column">
                <div className="ui mobile reversed stackable sixteen column grid">
                <div className="ten wide column">
                   <div className="ui pointing secondary tabs menu react-tabs-menu">
                    {sidebarStations}
                  </div>
                  </div>
                    <div className="six wide column">
                    <div className="ui six column grid">
                      <DatePicker date={this.props.date}/>
                      <PrimeButton />
                    </div>
                    </div>
                </div>
                  {rows === undefined ? '' : rows}
                <i className={rows === undefined ? 'huge notched circle loading icon' : ''}></i>
              </div>
            </div>
            );
        }
    });

module.exports = First;
