var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var RoomActions = {
    roomFetched : function(json) { 
        AppDispatcher.handleServerAction({
            actionType : AppConstants.ROOMS_FETCHED,
            data : json
        });
    },
    createRoom : function(newRoom) {
        AppDispatcher.handleViewAction({
            actionType : AppConstants.CREATE_ROOM,
            data : newRoom
        });
    },
    deleteRoom : function(deleteRoom) {
        AppDispatcher.handleViewAction({
            actionType : AppConstants.DELETE_ROOM,
            data : deleteRoom
        });
    }
    
};

module.exports = RoomActions;