var moment = require('moment');

var currentShow = function(startTime, endTime) {
  var currentTime = moment().format('HHmm');
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

var dataUtils = {
  dailyListings: function(data) {
    var newStations = [];
    var id = 0;

    for(var key in data) {
      if(key ==='KQEDDT') {
        continue;
      }
        var newStation = {station: key, shows: []};
        var listings = data[key].listings;

      for(var i = 0; i < listings.length; i++) {
        var formatTime = moment(listings[i].start_time, 'HHmm').format('h:mm A');
        var isPrime = moment(listings[i].start_time).isBetween('1929', '2201');
        var shouldAnchor = currentShow(listings[i].start_time, listings[i].minutes);
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
