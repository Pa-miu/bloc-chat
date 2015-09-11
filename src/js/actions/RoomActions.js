var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var RoomActions = {
    roomFetched : function(json) { 
        AppDispatcher.handleAction({
            type : AppConstants.ROOMS_FETCHED,
            data : json
        });
    },
    submitRoom : function(submitRoom) {
        AppDispatcher.handleAction({
            type : AppConstants.NEW_ROOM_SUBMIT,
            data : submitRoom
        });
    },
    createRoom : function(createRoom) {
        AppDispatcher.handleAction({
            type : AppConstants.CREATE_ROOM,
            data : createRoom
        });
    },
    deleteRoom : function(deleteRoom) {
        AppDispatcher.handleAction({
            type : AppConstants.DELETE_ROOM,
            data : deleteRoom
        });
    }
    
};

module.exports = RoomActions;