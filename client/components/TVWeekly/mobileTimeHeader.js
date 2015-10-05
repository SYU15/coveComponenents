var React = require('react');

var MobileTimeHeader = React.createClass({

  render: function() {
    return (
           <div className="react-menu">
            <div className="ui basic inverted segment">
              <h3 className="ui inverted header">{this.props.data.day}
                <div className="ui sub header">{this.props.data.month}/{this.props.data.date}</div>
              </h3>
            </div>
          </div>
      );
  }

});

module.exports = MobileTimeHeader;
