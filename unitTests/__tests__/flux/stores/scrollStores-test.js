jest.dontMock('../../../../client/stores/scrollStores');
jest.dontMock('../../../../client/constants/appConstants');
jest.dontMock('../../../../client/dispatchers/appDispatcher');
jest.dontMock('react/lib/Object.assign');
jest.dontMock('events');

describe('scrollStore', function(){
  var AppConstants = require('../../../../client/constants/appConstants');
  var AppDispatcher;
  var ScrollStore;
  var EventEmitter;
  var callback;
  var actionScroll;

  beforeEach(function(){
    AppDispatcher = require('../../../../client/dispatchers/appDispatcher');
    ScrollStore = require('../../../../client/stores/scrollStores');
    EventEmitter = require('events').EventEmitter;
    callback = AppDispatcher.register.mock.calls[0][0];
    actionScroll = AppDispatcher.handleViewAction({
        actionType: AppConstants.SCROLL
    });
  });
  
  it('registers a callback with the dispatcher', function() {
      expect(AppDispatcher.register.mock.calls.length).toBe(1);
    });
  
  it('returns the position of the scroll bar', function(){
    expect(ScrollStore.getScroll()).toEqual({scrollPosition: 0});
  });
  
  it('can set the position of the scroll bar', function(){
    ScrollStore.setScroll(1000);
    expect(ScrollStore.getScroll()).toEqual({scrollPosition: 1000});
  });

});
