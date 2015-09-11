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
            function(err) {
                console.log('ChatAPI.getRoom() encountered an error: ' + err.getCode());
            }
        );
    },
    createRoom : function(room){
        var key = room.name.toLowerCase();
        firebaseRef.child(paths.rooms).update({[key] : room});
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