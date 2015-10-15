var moment = require('moment');
require('moment-range');

//calculates whether program falls in primetime hourly range
var primeRange = function(startTime, endTime) {
  var end = moment(startTime, 'HHmm').add(endTime, 'minutes').format('HHmm');
  var tvDuration = moment.range(startTime, end);
  var primeDuration = moment.range('1930', '2201');
  if(tvDuration.overlaps(primeDuration)) {
    return true;
  } else {
    return false;
  }
};
//used by TV Schedule Tab to format data
var dataUtils = {
  currentShow: function(startTime, endTime, currentTime, station) {
    //isBetween is exclusive, so need to add/subtract 1 minute to endpoints
    endTime++;
    var start = moment(startTime, 'HHmm').subtract(1, 'minutes').format('HHmm');
    var end = moment(startTime, 'HHmm').add(endTime, 'minutes').format('HHmm');
    if(moment(currentTime).isBetween(start, end) && station === 'KQED') {
      return true;
    } else {
      return false;
    }
  },
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
        //checks to see if program is on right now
        var shouldAnchor = this.currentShow(listings[i].start_time, listings[i].minutes, current, key);
        newStation.shows.push({id: id, show: listings[i].title, 
                                time: formatTime, 
                                episode: listings[i].episode_title,
                                description: listings[i].description,
                                timestamp: listings[i].timestamp,
                                isPrime: isPrime,
                                shouldAnchor: shouldAnchor,
                                minutes: listings[i].minutes
                              });
        id++;
      }
      newStations.push(newStation);
    }
    return newStations;
  },
  weeklyListings: function(data) {
    var allListings = {};
    for(var i = 0; i < data.length; i++) {
      for(var key in data[i].data) {
        if(key ==='KQEDDT') {
          continue;
        }
        if(allListings[key]) {
          allListings[key].push(data[i].data[key].listings);
        } else {
          allListings[key] = [data[i].data[key].listings];
        }
      }
    }
    return allListings;
  }
};

module.exports = dataUtils;
