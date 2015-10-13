var AppDispatcher = require('../dispatchers/appDispatcher.js');
var AppConstants = require('../constants/appConstants.js');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var weeklyStore = require('./weeklyStores.js');

var CHANGE_EVENT = 'change';

var scrollPosition = 0;

var weeklyScrollStore = assign({}, EventEmitter.prototype, {
  getScroll: function() {
    return {
     scrollPosition: scrollPosition
    };
  },
  setScroll: function(currentPosition) {
     scrollPosition = currentPosition;
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
    case AppConstants.ANCHOR_LOADED:
      weeklyScrollStore.setScroll(action.scrollPosition);
      weeklyScrollStore.emitChange();
      break;
    default:
      // console.log('no registered action');
    }
    return true;
  });

module.exports = weeklyScrollStore;
