var React = require('react');
var TVList = require('./TVList.js');
var data = require('../../data/data.js');

var TVStream = React.createClass({
        render: function() {
          var rows = this.props.data.map(function(show, i){
            return <TVList data={show} key={show.id}></TVList> 
          })
          return <div data={this.props.data} className="ui segments ten wide column">{rows}</div>          
        }
      });

module.exports = TVStream;
