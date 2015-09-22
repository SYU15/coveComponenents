var moment = require('moment');

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
        newStation.shows.push({id: id, show: listings[i].title, 
                                time: formatTime, 
                                description: listings[i].description});
        id++;
      }
      newStations.push(newStation);
    }
    return newStations;
  }
};

module.exports = dataUtils;
