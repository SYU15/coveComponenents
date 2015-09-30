var React = require('react');
var $ = require('jquery');
var dropdown = require('../../../bower_components/semantic-ui/dist/components/dropdown.min.js');
require('../../../bower_components/semantic-ui/dist/components/transition.min.js');

var Dropdown = React.createClass({

  componentDidMount: function() {
    $('.ui.dropdown')
      .dropdown('set selected','KQED');
  },

  clickHandler: function() {

  },
  render: function() {
    return (
        <select className="ui compact dropdown">
          <option value="">Choose a channel</option>
          <option value="KQED">KQED 9</option>
          <option value="KQEDL">KQED Life</option>
          <option value="KQEDDT2">KQED Plus</option>
          <option value="KQEDV">KQED V-Me</option>
          <option value="KQEDK">KQED Kids</option>
          <option value="KQEDDT3">KQED World</option>
        </select>
      );  
  }
});

module.exports = Dropdown;
