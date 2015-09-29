jest.dontMock('../../../../client/stores/primeStores');
jest.dontMock('../../../../client/constants/appConstants');
jest.dontMock('../../../../client/dispatchers/appDispatcher');
jest.dontMock('react/lib/Object.assign');
jest.dontMock('events');

describe('scrollStore', function(){
  var AppConstants = require('../../../../client/constants/appConstants');
  var AppDispatcher;
  var PrimeStore;
  var EventEmitter;
  var callback;
  var actionScroll;

  beforeEach(function(){
    AppDispatcher = require('../../../../client/dispatchers/appDispatcher');
    PrimeStore = require('../../../../client/stores/primeStores');
    EventEmitter = require('events').EventEmitter;
    callback = AppDispatcher.register.mock.calls[0][0];
    actionScroll = AppDispatcher.handleViewAction({
        actionType: AppConstants.SCROLL
    });
  });
  it('registers a callback with the dispatcher', function() {
      expect(AppDispatcher.register.mock.calls.length).toBe(1);
    });
});
