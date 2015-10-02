var AppDispatcher = require('../dispatchers/appDispatcher.js');
var AppConstants = require('../constants/appConstants.js');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
var channel = 'KQED';

var data;
var calendar = {};

var setApiData = function(newData) {
  data = newData;
};

var weeklyStore = assign({}, EventEmitter.prototype, {
  getChannel: function() {
    return {
     channel: channel,
    };
  },
  setChannel: function(currentChannel) {
    channel = currentChannel;
  },
  getApiData: function() {
      return {
       apiData: data
      };
    },
  getCalendarData: function() {
    return calendar;
  },
  setCalendarData: function() {

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
    case AppConstants.WEEKLY:
      weeklyStore.setChannel(action.channel);
      weeklyStore.emitChange();
      break;
    case AppConstants.PENDING_WEEKLY:
      weeklyStore.emitChange();
      break;
    case AppConstants.WEEKLY_LOADED:
      setApiData(action.data);
      weeklyStore.emitChange();
      break;
    case AppConstants.WEEKLY_ERROR:
      setApiData(action.data);
      weeklyStore.emitChange();
      break;
    case AppConstants.CALENDAR:
      setCalendarData(action.calendar);
      weeklyStore.emitChange();
      break;
    default:
      console.log('no registered action');
    }
    return true;
  });

module.exports = weeklyStore;
