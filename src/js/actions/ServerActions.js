var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ServerActions = {
    roomListFetched : function(json) { 
        AppDispatcher.handleAction({
            type : AppConstants.ROOM_LIST_FETCHED,
            data : json
        });
    },
    
    roomMessagesFetched : function(json) {
        AppDispatcher.handleAction({
            type : AppConstants.ROOM_MESSAGES_FETCHED,
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