var React = require('react');
var actions = require('../../actions/appActions.js');

var $ = require('jquery');
var dropdown = require('dropdown');

var Dropdown = React.createClass({

  componentDidMount: function() {
    //set default selection to KQED
    $('.ui.dropdown').dropdown('set selected', 'KQED');
    //when dropdown value changes, set channel in actions
    $('.ui.dropdown')
      .dropdown({
        onChange: function() {
          var channel = $('.ui.dropdown').dropdown('get value');
          actions.changeWeeklyStation(channel);
          
          var anchorPosition = document.getElementById('react-weekly-anchor').offsetTop;
          actions.setWeeklyScroll(anchorPosition);
        }
      });
  },
  render: function() {
    return (
        <div className="ui basic segment react-dropdown">
          <select className={this.props.dropClass ? this.props.dropClass : "ui compact dropdown"}>
            <option value="">Choose a channel</option>
            <option value="KQED">KQED 9</option>
            <option value="KQEDL">Life</option>
            <option value="KQEDDT2">Plus</option>
            <option value="KQEDV">V-Me</option>
            <option value="KQEDK">Kids</option>
            <option value="KQEDDT3">World</option>
          </select>
        </div>
      );  
  }
});

module.exports = Dropdown;
