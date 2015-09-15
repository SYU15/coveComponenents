var React = require('react');
var TVList = require('./TVList.js');

var TVStream = React.createClass({

        getInitialState: function() {
          return { data: [
              {id: 1, show: "Show1"},
              {id: 2, show: "Show2"},
              {id: 3, show: "Show3"},
              {id: 4, show: "Show4"}
            ]};
        },

        componentDidMount: function() {
          //add data from server here
          // $.get
        },

        render: function() {
          var rows = this.state.data.map(function(show, i){
            return <TVList data={show} key={show.id}></TVList> 
          })
          return <div className="ui segments">{rows}</div>          
        }
      });

module.exports = TVStream;
