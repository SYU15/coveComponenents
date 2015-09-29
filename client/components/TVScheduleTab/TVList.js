var React = require('react');

var TVList = React.createClass({
      shortenDescription: function(description) {
        //shorten description for blocks less than 30 minutes long
        if(description.length > 400 && this.props.data.minutes <= 30) {
          return description.slice(0, 400) + "...";
        } else {
          return description;
        }
      },
      render: function() {
        //inline style to calculate height of entry based on number of minutes
        var divStyle = {
          height: (100 * Math.round(this.props.data.minutes/30)).toString()
        };
        return (
          <div id={this.props.data.shouldAnchor ? "anchor" : ""}> 
            <div className={!this.props.data.isPrime && !this.props.shouldShow ? "react-should-hide" : ""}>
                <div className ="ui move left reveal">
                  <div style={divStyle} className = {this.props.data.id % 2 === 0 ? "visible content ui secondary segment react-full-width" : "visible content ui segment react-full-width"}>
                    <div>
                      <div className="ui dividing header">{this.props.data.show}</div> 
                      {this.props.data.time}
                    </div>
                  </div>
                  <div className="hidden content react-whitespace-fix">
                    <p>{this.props.data.description ? this.shortenDescription(this.props.data.description) : "No Description Available."}</p>
                  </div>
                </div>
            </div>
          </div>
          );
      } 
});

module.exports = TVList;
