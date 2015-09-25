var AppDispatcher = require('../dispatchers/appDispatcher.js');
var AppConstants = require('../constants/appConstants.js');
var timeUtils = require('../utils/timeProcessing.js');

var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var moment = require('moment');

var CHANGE_EVENT = 'change';

var _apiCall = 'http://mediaapiservice-vpc.elasticbeanstalk.com/v1.0/tv/listings/kqed/';
var _url = _apiCall;
var _date = moment().format('YYYYMMDD');
var _startDate = _date;
var data;

var newDay = function(direction) {
  var endTime;
  
  if(direction === 'previous') {
    endTime = moment(_date, 'YYYYMMDD').subtract(1, 'days').format('YYYYMMDD');
    } else if (direction === 'next') {
      endTime = moment(_date, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
  }

  var newTime = timeUtils.dateLimit(_startDate, endTime, _date);
  
  _apiCall = _url + newTime;
  _date = newTime;
};

var setApiData = function(newData) {
  data = newData;
};

var tabStore = assign({}, EventEmitter.prototype, {
  getApiData: function() {
      return {
       apiCall: _apiCall,
       date: _date,
       apiData: data
      };
    },
  emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

   addChangeListener: function(callback) {
     this.on(CHANGE_EVENT, callback);
   },

   removeChangeListener: function(callback) {
     this.removeListener(CHANGE_EVENT, callback);
   }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action.actionType) {
    case AppConstants.PREVIOUS_DAY:
      newDay('previous');
      tabStore.emitChange();
      break;
    case AppConstants.NEXT_DAY:
      newDay('next');
      tabStore.emitChange();
      break;
    case AppConstants.PENDING_CALL:
      tabStore.emitChange();
      break;
    case AppConstants.LOADED:
      setApiData(action.data);
      tabStore.emitChange();
      break;
    case AppConstants.ERROR:
      setApiData(action.data);
      tabStore.emitChange();
      break;
    default:
      console.log('no registered action');
  }
});

module.exports = tabStore;
