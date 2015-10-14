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
  description = encodeURIComponent(description+ ' (Schedule is subject to change)');

  calURL = 'https://addevent.to/dir/?client=' + ate + '&start=' + newStart + '&starttime=' + startTime + '&startext=' + clockStart +
            '&end=' + newEnd + '&endtime=' + endTime + '&endext=' + clockEnd + '&title=' + title + '&description=' + description + '&service=' + calType +
            '&date_format=MM%2FDD%2FYYYY&timezone=America/Los_Angeles&alarm=1440&all_day_event=false';
  return calURL;
};

module.exports = calendarCall;
