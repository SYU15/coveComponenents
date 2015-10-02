var AppConstants = require('../constants/appConstants.js');
var AppDispatcher = require('../dispatchers/appDispatcher.js');
var dataUtils = require('../utils/dataProcessing.js');
var $ = require('jquery');
var TabStores = require('../stores/tabStores.js');

var _apiCall = 'http://mediaapiservice-vpc.elasticbeanstalk.com/v1.0/tv/listings/kqed/';

var AppActions = {
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
  primetime: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.PRIMETIME
    });    
  },
  getData: function(apiUrl) {
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
          
          var data = dataUtils.dailyListings(result.data);
          AppDispatcher.handleViewAction({
            actionType: AppConstants.LOADED,
            data: data
          });
        },
        error: function(result) {
          AppDispatcher.handleViewAction({
            actionType: AppConstants.ERROR,
            data: result
          });
        }
    });
  },
  scroll: function(scrollPosition) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SCROLL,
      scrollPosition: scrollPosition
    });   
  },
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
