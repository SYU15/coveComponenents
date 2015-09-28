var AppDispatcher = require('../dispatchers/appDispatcher.js');
var AppConstants = require('../constants/appConstants.js');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
var scrollPosition = 0;

var scrollStore = assign({}, EventEmitter.prototype, {
  getScroll: function() {
    return {
     scrollPosition: scrollPosition 
    };
  },
  setScroll: function(currentScroll) {
    console.log(currentScroll);
    scrollPosition = currentScroll;
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
    case AppConstants.SCROLL:
      console.log('registered');
      scrollStore.setScroll(action.scrollPosition);
      scrollStore.emitChange();
      break;
    default:
      console.log('no registered action');
    }
    return true;
  });

module.exports = scrollStore;

