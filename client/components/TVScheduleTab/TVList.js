var React = require('react');

var TVList = React.createClass({
      render: function() {
        return (
          <div className = "ui move left reveal">
            <div className = {this.props.data.id % 2 === 0 ? "visible content ui secondary segment full-width" : "visible content ui segment full-width"}>
              <div>
                <div className="ui dividing header">{this.props.data.show}</div> 
                Time: {this.props.data.time}
              </div>
            </div>
            <div className="hidden content whitespace-fix">
              <p>{this.props.data.description ? this.props.data.description : "No Description Available."}</p>
            </div>
          </div>
          );
      } 
});

module.exports = TVList;
