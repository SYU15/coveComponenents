var React = require('react');
var $ = require('jquery');
var primeStore = require('../../stores/primeStores.js');
var actions = require('../../actions/appActions.js');


var TVList = React.createClass({
      getInitialState: function() {
        return primeStore.getToggle();
       // return {
       //  firstLoad: true
       // };
      },
      // componentDidUpdate: function() {
      //   // var anchor = $('#react-anchor');
      //   // if(anchor.length > 0 && this.state.firstLoad) {
      //   //   if(anchor.offset().top > 0) {
      //   //     $('.react-schedule-tab').scrollTop(Math.round(anchor.offset().top));
      //   //     this.setState({firstLoad: false});
      //   //   }
      //   // }
      //   // console.log(React.findDOMNode(this.refs.reactAnchor));
      //   // if(React.findDOMNode(this.refs.reactAnchor)) {
      //   //   console.log('true');
      //   // }
      // },
      render: function() {
        return (
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
          );
      } 
});

module.exports = TVList;
