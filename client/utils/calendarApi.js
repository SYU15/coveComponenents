var $ = require('jquery');
var moment = require('moment');

var ate = require('../config/ate.js').ATE;
var calURL;

var calendarCall = function(calType, start, endTime, title, description) {
  var unixConvert = moment.unix(start);
  var newStart = unixConvert.format('MM/DD/YYYY');
  var startTime = unixConvert.format('hh:mm');
  var clockStart = unixConvert.format('A');

  var unixConvertEnd = unixConvert.add(endTime, 'minutes');
  var newEnd = unixConvertEnd.format('MM/DD/YYYY');
  endTime = unixConvertEnd.format('hh:mm');
  var clockEnd = unixConvertEnd.format('A');

  title = encodeURIComponent(title);
  description = encodeURIComponent(description);

  calURL = 'https://addevent.to/dir/?client=' + ate + '&start=' + newStart + '&starttime=' + startTime + '&startext=' + clockStart +
            '&end=' + newEnd + '&endtime=' + endTime + '&endtext=' + clockEnd + '&title=' + title + '&description=' + description + '&service=' + calType +
            '&date_format=MM%2FDD%2FYYYY' + '&timezone=America/Los_Angeles' + '&alarm=1440';
  
  $.ajax({
      url: calURL,
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
