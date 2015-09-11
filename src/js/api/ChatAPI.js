var Firebase = require('firebase');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var RoomActions = require('../actions/RoomActions');

var firebaseRef = new Firebase('https://kusera-bloc-chat.firebaseio.com');
var paths = {
    rooms : '/rooms/',
    messages : '/messages/',
    members : '/members/'
}

var ChatAPI = {
    getRooms : function(){
        firebaseRef.child(paths.rooms).on('value', 
            function(data) {
                RoomActions.roomFetched(data.val());
            },
            function(error) {
                console.log('ChatAPI.getRoom() encountered an error: ' + error.getCode());
            }
        );
    },
    createRoom : function(room){
        var key = room.name.toLowerCase();
        
        firebaseRef.child(paths.rooms + key).once('value', function(data) {
            if (!data.exists()) {
            firebaseRef.child(paths.rooms + key).set(room, function(error){
                if (error) {
                    console.log('ChatAPI.createRoom() encountered an error: ' + error.getCode());
                }
                else {
                    console.log('ChatAPI.createRoom() was successful, updating list of rooms...');
                    ChatAPI.getRooms();
                }
            });
        }
        });
        
        
    }
};

ChatAPI.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.CREATE_ROOM:
            ChatAPI.createRoom(action.data);
            break;
        default:
            return true;
    }
});

module.exports = ChatAPI;