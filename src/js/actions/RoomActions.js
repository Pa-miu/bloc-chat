var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var RoomActions = {
    roomFetched : function(json) { 
        AppDispatcher.handleAction({
            type : AppConstants.ROOMS_FETCHED,
            data : json
        });
    },
    createRoom : function(room) {
        AppDispatcher.handleAction({
            type : AppConstants.CREATE_ROOM,
            data : room
        });
    },
    deleteRoom : function(room) {
        AppDispatcher.handleAction({
            type : AppConstants.DELETE_ROOM,
            data : room
        });
    }
    
};

module.exports = RoomActions;