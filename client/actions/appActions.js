var AppConstants = require('../constants/appConstants.js');
var AppDispatcher = require('../dispatchers/appDispatcher.js');

var AppActions = {
  nextDay: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.NEXT_DAY
    });  
  },
  previousDay: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.PREVIOUS_DAY
    });      
  }
};
module.exports = AppActions;
