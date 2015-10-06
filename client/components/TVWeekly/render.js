var React = require('react');
var WeeklyWrapper = require('./weeklyWrapper');

//entrypoint for gulp render of Weekly Schedule
React.render(<WeeklyWrapper />, document.getElementById('weeklySchedule'));
