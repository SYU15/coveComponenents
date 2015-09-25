var moment = require('moment');
require('moment-range');

var currentShow = function(startTime, endTime, currentTime) {
  //isBetween is exclusive, so need to add/subtract 1 minute to endpoints
  endTime++;
  var start = moment(startTime, 'HHmm').subtract(1, 'minutes').format('HHmm');
  var end = moment(startTime, 'HHmm').add(endTime, 'minutes').format('HHmm');
  if(moment(currentTime).isBetween(start, end)) {
    console.log('true');
    return true;
  } else {
    return false;
  }
};

var primeRange = function(startTime, endTime) {
  endTime--;
  var end = moment(startTime, 'HHmm').add(endTime, 'minutes').format('HHmm');
  var tvDuration = moment.range(startTime, end);
  var primeDuration = moment.range('1929', '2201');
  if(tvDuration.overlaps(primeDuration)) {
    console.log(startTime);
    console.log(end);
    console.log('true');
    return true;
  } else {
    return false;
  }
};

var dataUtils = {
  dailyListings: function(data) {
    var newStations = [];
    var id = 0;
    var current = moment().format('HHmm');

    for(var key in data) {
      if(key ==='KQEDDT') {
        continue;
      }
        var newStation = {station: key, shows: []};
        var listings = data[key].listings;

      for(var i = 0; i < listings.length; i++) {
        var formatTime = moment(listings[i].start_time, 'HHmm').format('h:mm A');
        var isPrime = primeRange(listings[i].start_time, listings[i].minutes);
        var shouldAnchor = currentShow(listings[i].start_time, listings[i].minutes, current);
        newStation.shows.push({id: id, show: listings[i].title, 
                                time: formatTime, 
                                description: listings[i].description,
                                isPrime: isPrime,
                                shouldAnchor: shouldAnchor
                              });
        id++;
      }
      newStations.push(newStation);
    }
    return newStations;
  }
};

module.exports = dataUtils;
