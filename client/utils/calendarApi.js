var $ = require('jquery');
var moment = require('moment');

var ate = require('../config/ate.js').ATE;
var calURL;

var calendarCall = function(calType, startTime, endTime, title, description) {
  startTime = moment.unix(startTime).format('MM/DD/YYYY hh:mm A');
  endTime = moment.unix(startTime).add(endTime, 'minutes').format('MM/DD/YYYY hh:mm A');
  title = title.replace(' ', '+');
  description = description.replace(' ', '+');

  calURL = 'https://addevent.to/dir/?client=' + ate + '&start=' + startTime + 
            '&end=' + endTime + '&title=' + title + '&description=' + description + '&service=' + calType +
            '&date_format=MM%2FDD%2FYYYY' + '&timezone=America/Los_Angeles' + '&alarm=1440';
  console.log(calURL);
  
  $.ajax({
      url: calURL,
      type: 'GET',
      success: function(result){
        console.log('success');
        console.log(result);
      },
      error: function(result) {
        console.log('error');
        console.log(result);
      }
  });
};

module.exports = calendarCall;
