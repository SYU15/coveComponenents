var React = require('react');
var TVStream = require('./TVStream.js');

var First = React.createClass({
        render: function() {
          return <div><TVStream></TVStream></div>
        }
      });

module.exports = First;
