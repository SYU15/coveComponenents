var React = require('react');
var $ = require('jquery');

var TVList = React.createClass({
      getInitialState: function() {
       return {
        firstLoad: true
       };
      },
      componentDidUpdate: function() {
        var anchor = document.getElementById('anchor') || null;
        var tabs = $('.react-schedule-tab');
        console.log(tabs);
        if(this.state.firstLoad && anchor) {
          tabs.scrollTop(anchor.offsetTop);
          this.setState({firstLoad: false});
        }
      },
      render: function() {
        return (
          <div id={this.props.data.shouldAnchor ? "anchor" : ""}> 
            <div className={!this.props.data.isPrime && !this.props.shouldShow ? "react-should-hide" : ""}>
                <div className ="ui move left reveal">
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
            </div>
          </div>
          );
      } 
});

module.exports = TVList;
