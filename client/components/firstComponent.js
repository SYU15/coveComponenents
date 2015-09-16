var React = require('react');
var TVStream = require('./TVStream.js');
var TVSidebar = require('./TVSidebar.js');

var First = React.createClass({
        render: function() {
          return (
            <div className="ui grid">
              <div className="row">
                <TVStream></TVStream>
                <TVSidebar></TVSidebar>
              </div>
            </div>
            );
        }
      });

module.exports = First;
