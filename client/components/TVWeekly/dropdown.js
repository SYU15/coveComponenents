var React = require('react');
var $ = require('jquery');
var dropdown = require('../../../bower_components/semantic-ui/dist/components/dropdown.min.js');
require('../../../bower_components/semantic-ui/dist/components/transition.min.js');

var Dropdown = React.createClass({

  componentDidMount: function() {
    $('.ui.dropdown')
      .dropdown('set selected','0');
  },

  clickHandler: function() {

  },
  render: function() {
    return (
      <div>
        <select className="ui dropdown">
          <option value="">Choose a channel</option>
          <option value="0">KQED World</option>
          <option value="2">KQED Plus</option>
          <option value="1">KQED Life</option>
          <option value="3">KQED V-Me</option>
          <option value="4">KQED Kids</option>
        </select>
      </div>
      );  
  }
});

module.exports = Dropdown;
