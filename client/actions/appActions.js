var AppConstants = require('../constants/appConstants.js');
var AppDispatcher = require('../dispatchers/appDispatcher.js');
var dateUtils = require('../utils/dataProcessing.js');
var $ = require('jquery');
var TabStores = require('../stores/tabStores.js');

var _apiCall = 'http://mediaapiservice-vpc.elasticbeanstalk.com/v1.0/tv/listings/kqed/';

var AppActions = {
  nextDay: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.NEXT_DAY
    });
    var getApi = TabStores.getApiData().apiCall;
    console.log(TabStores.getApiData().apiCall);
    this.getData(TabStores.getApiData().apiCall) ; 
  },
  previousDay: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.PREVIOUS_DAY
    });
    this.getData(TabStores.getApiData().apiCall) ;       
  },
  getData: function(apiUrl) {
    console.log('getData called')
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
          
          var data = dateUtils.dailyListings(result.data);
          AppDispatcher.handleViewAction({
            actionType: AppConstants.LOADED,
            data: data
          });
        },
        error: function(result) {
          AppDispatcher.handleViewAction({
            actionType: AppConstants.ERROR,
            data: data
          });
        }
    });
  }
};
module.exports = AppActions;
