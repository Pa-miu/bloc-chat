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
    getRoom : function(){
        firebaseRef.child(paths.rooms).on('value', 
            function(data) {
                RoomActions.roomFetched(data.val());
            },
            function(err) {
                console.log('ChatAPI.getRoom() encountered an error: ' + err.getCode());
            }
        );
    },
    submitRoom : function(submitRoom){
        var key = submitRoom.name.toLowerCase();
        firebaseRef.child(paths.rooms).update({[key] : submitRoom});
    }
};

ChatAPI.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.actionType) {
        case AppConstants.NEW_ROOM_SUBMIT:
            ChatAPI.submitRoom(action.data);
            break;
        default:
            return true;
    }
});
module.exports = ChatAPI;