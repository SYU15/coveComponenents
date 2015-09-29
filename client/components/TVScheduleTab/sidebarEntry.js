var React = require('react');
var scrollStore = require('../../stores/scrollStores.js');
var actions = require('../../actions/appActions.js');
var $ = require('jquery')
;
var SidebarEntry = React.createClass({
      getInitialState: function() {
        return scrollStore.getScroll();
      },
      componentDidMount: function() {
        var component = this;
        if(this.isMounted()) {
       
          var delay = 1000;
          var timeout = null;
          
          $('.react-schedule-tab').bind('scroll',function(){
              clearTimeout(timeout);
              timeout = setTimeout(function(){
                var scrollPosition = $('.react-schedule-tab.active').scrollTop();
                component.setState({scrollPosition: scrollPosition});
              },delay);
          });

        scrollStore.addChangeListener(this.onChange);
        }
      },
      componentWillUnmount: function() {
        tabStore.removeChangeListener(this.onChange);
      },
      onChange: function() {
        this.setState(scrollStore.getScroll());
        $('.react-schedule-tab.active').scrollTop(this.state.scrollPosition);
      },
      clickHandler: function() {
        var tabs = $('.react-schedule-tab.active');
        actions.scroll(this.state.scrollPosition);
      },
      render: function() {
        return (
          <a onClick={this.clickHandler} className={this.props.data === 'KQED' ? 'active item react-small-item' : 'item react-small-item'} data-tab={this.props.data}>
            {this.props.data}
          </a>
        );
      }
});

module.exports = SidebarEntry;
