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
        firebaseRef.child(paths.rooms).once('value', 
            function(data) {
                RoomActions.roomFetched(data.val());
            },
            function(err) {
                console.log('getRoom encountered an error: ' + err.getCode());
            }
        );
    },
    submitRoom : function(submitRoom){
        
    }
};

AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.actionType) {
        case AppConstants.NEW_ROOM_SUBMIT:
            submitRoom(action.data);
            break;
        default:
            return true;
    }
});
module.exports = ChatAPI;