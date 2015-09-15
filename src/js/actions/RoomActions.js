var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var ChatAPI = require('../api/ChatAPI');

var RoomActions = {
    createRoom : function(newRoom) {
        ChatAPI.createRoom(newRoom);
    },
    
    deleteRoom : function(roomName) {
        ChatAPI.deleteRoom(roomName);
    },
    
    changeRoom : function(roomName) {
        ChatAPI.getMessages(roomName);
    } 
};

module.exports = RoomActions;