jest.dontMock('../../../../client/stores/primeStores');
jest.dontMock('../../../../client/constants/appConstants');
jest.dontMock('../../../../client/dispatchers/appDispatcher');
jest.dontMock('react/lib/Object.assign');
jest.dontMock('events');
jest.dontMock('moment');
jest.dontMock('../../../../client/utils/timeProcessing.js');

describe('tabStore', function(){
  var AppConstants = require('../../../../client/constants/appConstants');
  var timeUtils = require('../../../../client/utils/timeProcessing.js');
  var AppDispatcher;
  var PrimeStore;
  var EventEmitter;
  var callback;
  var actionPrevious;
  var actionNext;
  var actionPending;
  var actionLoaded;
  var actionError;

  beforeEach(function(){
    AppDispatcher = require('../../../../client/dispatchers/appDispatcher');
    PrimeStore = require('../../../../client/stores/primeStores');
    EventEmitter = require('events').EventEmitter;
    callback = AppDispatcher.register.mock.calls[0][0];
    
    actionPrevious = AppDispatcher.handleViewAction({
        actionType: AppConstants.PREVIOUS_DAY
    });
    actionNext = AppDispatcher.handleViewAction({
        actionType: AppConstants.NEXT_DAY
    });
    actionPending = AppDispatcher.handleViewAction({
        actionType: AppConstants.PENDING_CALL
    });
    actionLoaded = AppDispatcher.handleViewAction({
        actionType: AppConstants.PENDING_CALL
    });
    actionLoaded = AppDispatcher.handleViewAction({
        actionType: AppConstants.LOADED
    });
    actionError = AppDispatcher.handleViewAction({
        actionType: AppConstants.ERROR
    });

  });
  it('registers a callback with the dispatcher', function() {
      expect(AppDispatcher.register.mock.calls.length).toBe(1);
    });
});
