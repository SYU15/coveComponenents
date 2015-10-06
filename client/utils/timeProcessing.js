var moment = require('moment');
var timeUtils = {
  //api schedule can only go two weeks in advance or in the past
  //startTime is today's date, endTime is the date user is querying for
  dateLimit: function(startTime, endTime, currentTime) {
    var difference = moment(startTime, 'YYYYMMDD').diff(moment(endTime, 'YYYYMMDD'), 'days');
    if(Math.abs(difference) < 14) {
      return endTime;
    } else {
      //if more that two weeks difference, just return same date
      return currentTime;
    }
  },
  weekCalculation: function() {
      var week = [];
      var startWeek = moment();
      var endWeek = moment().add(6, 'days');
      
      week.push({
          day: startWeek.format('dddd'), 
          date: startWeek.format('D'),
          month: startWeek.format('M')
          });

      while(startWeek.isBefore(endWeek, 'day') && week.length < 8) {
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
