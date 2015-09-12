var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var ChatAPI = require('../api/ChatAPI');

var RoomActions = {
    createRoom : function(room) {
        ChatAPI.createRoom(room);
    },
    deleteRoom : function(room) {
        ChatAPI.deleteRoom(room);
    }
    
};

module.exports = RoomActions;