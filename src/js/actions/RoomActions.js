var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var RoomActions = {
    roomFetched : function(json) { 
        AppDispatcher.handleServerAction({
            actionType : AppConstants.ROOMS_FETCHED,
            data : json
        });
    },
    submitRoom : function(submitRoom) {
        AppDispatcher.handleViewAction({
            actionType : AppConstants.NEW_ROOM_SUBMIT,
            data : submitRoom
        });
    },
    createRoom : function(createRoom) {
        AppDispatcher.handleViewAction({
            actionType : AppConstants.CREATE_ROOM,
            data : createRoom
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