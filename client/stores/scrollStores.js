var AppDispatcher = require('../dispatchers/appDispatcher.js');
var AppConstants = require('../constants/appConstants.js');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
