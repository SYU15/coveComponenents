var React = require('react');

var TVList = React.createClass({
      render: function() {
        return (
          <div className = {this.props.data.isPrime === true ? "ui move left reveal" : "ui move left reveal react-should-hide"}>
            <div className = {this.props.data.id % 2 === 0 ? "visible content ui secondary segment react-full-width" : "visible content ui segment react-full-width"}>
              <div>
                <div className="ui dividing header">{this.props.data.show}</div> 
                {this.props.data.time}
              </div>
            </div>
            <div className="hidden content react-whitespace-fix">
              <p>{this.props.data.description ? this.props.data.description : "No Description Available."}</p>
            </div>
          </div>
          );
      } 
});

module.exports = TVList;
