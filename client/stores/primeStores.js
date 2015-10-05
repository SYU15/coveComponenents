var AppDispatcher = require('../dispatchers/appDispatcher.js');
var AppConstants = require('../constants/appConstants.js');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var moment = require('moment');

var CHANGE_EVENT = 'change';

var hide = true;

var toggleShow = function() {
  hide = !hide;
};

var primeStore = assign({}, EventEmitter.prototype, {
  getToggle: function() {
    return {
     shouldShow: hide 
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
    case AppConstants.PRIMETIME:
      toggleShow();
      primeStore.emitChange();
      break;
    default:
      // console.log('no registered action');
    }
    return true;
  });

module.exports = primeStore;
