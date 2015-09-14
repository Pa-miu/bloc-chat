var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ServerActions = {
    roomsFetched : function(json) { 
        AppDispatcher.handleAction({
            type : AppConstants.ROOMS_FETCHED,
            data : json
        });
    },
    
    messagesFetched : function(json) {
        AppDispatcher.handleAction({
            type : AppConstants.MESSAGES_FETCHED,
            data : json
        });
    },
    
    newMessageFetched : function(json) {
        AppDispatcher.handleAction({
            type : AppConstants.NEW_MESSAGE_FETCHED,
            data : json
        });
    },
};

module.exports = ServerActions;