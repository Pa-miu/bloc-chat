var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ServerActions = {
    userFetched : function(json) { 
        AppDispatcher.handleAction({
            type : AppConstants.USER_FETCHED,
            data : json
        });
    },
    
    activeUsersFetched : function(json) {
        AppDispatcher.handleAction({
            type : AppConstants.ACTIVE_USERS_FETCHED,
            data : json
        });
    },
    
    roomListFetched : function(json) { 
        AppDispatcher.handleAction({
            type : AppConstants.ROOM_LIST_FETCHED,
            data : json
        });
    },
    
    messageFetched : function(json) {
        AppDispatcher.handleAction({
            type : AppConstants.MESSAGE_FETCHED,
            data : json
        });
    },
    
    messageRemoved : function(json) {
        AppDispatcher.handleAction({
            type : AppConstants.MESSAGE_REMOVED,
            data : json
        });
    },
};

module.exports = ServerActions;