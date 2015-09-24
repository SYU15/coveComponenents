var AppDispatcher = require('../dispatchers/appDispatcher.js');
var AppConstants = require('../constants/appConstants.js');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var moment = require('moment');


var CHANGE_EVENT = 'change';

var _apiCall = 'http://mediaapiservice-vpc.elasticbeanstalk.com/v1.0/tv/listings/kqed/';
var _date = moment().format('YYYYMMDD');

var previousDay = function() {
  _apiCall += testTab;
  _date = testTab;
};

var nextDay = function() {
};


var testTab = 20150920;

var tabStore = assign({}, EventEmitter.prototype, {
  getApiParams: function() {
      return {
        apiCall: _apiCall,
        date: _date
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
      previousDay();
      console.log('previous day registered');
      tabStore.emitChange();
      break;
    case AppConstants.NEXT_DAY:
      console.log('next day registered');
      tabStore.emitChange();
      break;
    default:
      console.log('no registered action');
  }
});

module.exports = tabStore;
