var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var ChatAPI = require('../api/ChatAPI');

var RoomActions = {
    createRoom : function(room) {
        ChatAPI.createRoom(room);
    },
    
    deleteRoom : function(name) {
        ChatAPI.deleteRoom(name);
    }
    
};

module.exports = RoomActions;