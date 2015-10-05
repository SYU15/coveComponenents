var React = require('react');
var actions = require('../../actions/appActions.js');

var $ = require('jquery');
var dropdown = require('dropdown');

var Dropdown = React.createClass({

  componentDidMount: function() {
    $('.ui.dropdown').dropdown('set selected', 'KQED');
    $('.ui.dropdown')
      .dropdown({
        onChange: function() {
          var channel = $('.ui.dropdown').dropdown('get value');
          actions.changeWeeklyStation(channel);
        }
      });
  },
  render: function() {
    return (
        <div className="ui basic segment react-dropdown">
          <select className={this.props.dropClass ? this.props.dropClass : "ui compact dropdown"}>
            <option value="">Choose a channel</option>
            <option value="KQED">KQED 9</option>
            <option value="KQEDL">KQED Life</option>
            <option value="KQEDDT2">KQED Plus</option>
            <option value="KQEDV">KQED V-Me</option>
            <option value="KQEDK">KQED Kids</option>
            <option value="KQEDDT3">KQED World</option>
          </select>
        </div>
      );  
  }
});

module.exports = Dropdown;
