var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var ChatAPI = require('../api/ChatAPI');

var RoomActions = {
    createRoom : function(newRoom, currentRoom, username) {
        ChatAPI.createRoom(newRoom,  currentRoom, username);
    },
    
    deleteRoom : function(roomName, fallbackRoom, username) {
        ChatAPI.deleteRoom(roomName, fallbackRoom, username);
    },
    
    changeRoom : function(roomName, lastRoom, username) {
        ChatAPI.getMessages(roomName, lastRoom, username);
    } 
};

module.exports = RoomActions;