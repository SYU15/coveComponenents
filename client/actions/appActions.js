var AppConstants = require('../constants/appConstants.js');
var AppDispatcher = require('../dispatchers/appDispatcher.js');
var dataUtils = require('../utils/dataProcessing.js');
var $ = require('jquery');
var TabStores = require('../stores/tabStores.js');

var _apiCall = 'http://mediaapiservice-vpc.elasticbeanstalk.com/v1.0/tv/listings/kqed/';
var previousAPI;

var AppActions = {
  //actions used by TV Daily Schedule Tabs starts here (used by tabStores)
  nextDay: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.NEXT_DAY
    });
    var getApi = TabStores.getApiData().apiCall;
    this.getData(TabStores.getApiData().apiCall) ; 
  },
  previousDay: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.PREVIOUS_DAY
    });
    this.getData(TabStores.getApiData().apiCall) ;       
  },
  getData: function(apiUrl) {
    //only make the call if the user can see that date (within 14 days)
    if(previousAPI !== apiUrl) {
      previousAPI = apiUrl;
      //before AJAX call, set status to pending
      AppDispatcher.handleViewAction({
        actionType: AppConstants.PENDING_CALL
      });
      
      $.ajax({
          url: apiUrl,
          type: 'GET',
          success: function(result){
            if(typeof result === 'string') {
              result = JSON.parse(result);
            }
            console.log('called');
            var data = dataUtils.dailyListings(result.data);
            //if successful, fire off loaded event
            AppDispatcher.handleViewAction({
              actionType: AppConstants.LOADED,
              data: data
            });
          },
          error: function(result) {
            //if error, fire off error event
            AppDispatcher.handleViewAction({
              actionType: AppConstants.ERROR,
              data: result
            });
          }
      });
    }
  },
  //this is used by primeStores
  primetime: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.PRIMETIME
    });    
  },
  //this is used by scrollStores
  scroll: function(scrollPosition) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SCROLL,
      scrollPosition: scrollPosition
    });   
  },
  //actions used by TV Weekly Schedule start here (used by weeklyStores)
  changeWeeklyStation: function(channel) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.WEEKLY,
      channel: channel
    }); 
  },
  getWeeklyData: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.PENDING_WEEKLY
    });
    
    $.ajax({
        url: 'http://mediaapiservice-vpc.elasticbeanstalk.com/v1.0/tv/listings_week/kqed/',
        type: 'GET',
        success: function(result){
          if(typeof result === 'string') {
            result = JSON.parse(result);
          }
          var data = dataUtils.weeklyListings(result);
          AppDispatcher.handleViewAction({
            actionType: AppConstants.WEEKLY_LOADED,
            data: data
          });
        },
        error: function(result) {
          AppDispatcher.handleViewAction({
            actionType: AppConstants.WEEKLY_ERROR,
            data: result
          });
        }
    });
  },
};
module.exports = AppActions;
