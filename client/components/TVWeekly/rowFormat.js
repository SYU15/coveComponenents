var React = require('react');
var TimeCell = require('./timeCell.js');
var ProgramColumn = require('./programColumn.js');
var weeklyStore = require('../../stores/weeklyStores.js');

var RowFormat = React.createClass({
  getInitialState: function() {
    return weeklyStore.getChannel();
  },
  getDefaultProps: function() {
    return {
     day: ["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm",]
   };
  },
  componentDidMount: function() {
    weeklyStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function() {
    weeklyStore.removeListener(this.onChange);
  },
  onChange: function() {
    this.setState(weeklyStore.getChannel());
  }, 
  render: function() {
    var data = this.props.data;

    var rows = this.props.day.map(function(hour, i){
      return <div key={i}><TimeCell time={hour} /></div>
    });

    if(this.props.data) {
      var rows2 = this.props.data[this.state.channel].map(function(day, i){
        return <div className="two wide column " key={i}><ProgramColumn data={day} /></div>
      });
    }

    return (
          <div className="ui equal width internally celled stackable grid react-grid-scroll">
            <div className="two wide center aligned column computer only">{rows}</div>
            {rows2}
            <i className={rows2 === undefined ? 'huge notched circle loading icon react-center-icon' : ''}></i>
          </div>
        );
  }
});

module.exports = RowFormat;
