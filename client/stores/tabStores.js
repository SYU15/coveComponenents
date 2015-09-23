var AppDispatcher = require('../dispatchers/appDispatcher.js');
var AppConstants = require('../constants/appConstants.js');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var previousDay = function() {
  console.log('previous day registered');
};

var nextDay = function() {
  console.log('next day registered');
};

var tabStore = assign({}, EventEmitter.prototype, {
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

AppDispatcher.registere(function(action) {
  switch(action.actionType) {
    case AppConstants.PREVIOUS_DAY:
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
