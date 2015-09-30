var moment = require('moment');
var timeUtils = {
  dateLimit: function(startTime, endTime, currentTime) {
    var difference = moment(startTime, 'YYYYMMDD').diff(moment(endTime, 'YYYYMMDD'), 'days');
    if(Math.abs(difference) < 14) {
      return endTime;
    } else {
      return currentTime;
    }
  },
  weekCalculation: function() {
      var week = [];
      var startWeek = moment().startOf('isoWeek').subtract(1, 'days');
      var endWeek = moment().endOf('isoWeek').subtract(2, 'days');
      
      week.push({
          day: startWeek.format('dddd'), 
          date: startWeek.format('D'),
          month: startWeek.format('M')
          });

      while(startWeek.isBefore(endWeek)) {
        startWeek = startWeek.add(1, 'days');
        week.push({
          day: startWeek.format('dddd'), 
          date: startWeek.format('D'),
          month: startWeek.format('M')
          });
      }

      return week;
    }
};

module.exports = timeUtils;
