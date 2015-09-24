var moment = require('moment');

var timeUtils = {
  dateLimit: function(startTime, endTime, currentTime) {
    var difference = moment(startTime, 'YYYYMMDD').diff(moment(endTime, 'YYYYMMDD'), 'days');
    if(Math.abs(difference) < 14) {
      return endTime;
    } else {
      return currentTime;
    }
  }
};

module.exports = timeUtils;
