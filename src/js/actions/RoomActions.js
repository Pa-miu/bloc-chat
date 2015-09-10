var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var RoomActions = {
    createRoom : function(newRoom) {
        AppDispatcher.handleViewAction({
            actionType : AppConstants.CREATE_ROOM,
            data : newRoom
        });
    },
    closeRoom : function(deleteRoom) {
        AppDispatcher.handleViewAction({
            actionType : AppConstants.CLOSE_ROOM,
            data : deleteRoom
        });
    }
    
};

module.exports = RoomActions;