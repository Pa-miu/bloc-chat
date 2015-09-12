var Firebase = require('firebase');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var ServerActions = require('../actions/ServerActions');

var firebaseRef = new Firebase('https://kusera-bloc-chat.firebaseio.com');
var paths = {
    rooms : '/rooms/',
    messages : '/messages/',
    members : '/members/'
};

var ChatAPI = {
    getRooms : function(){
        firebaseRef.child(paths.rooms).on('value', 
            function(data) {
                ServerActions.roomFetched(data.val());
            },
            function(error) {
                console.log('ChatAPI.getRoom() encountered an error: ' + error.getCode());
            }
        );
    },
    createRoom : function(room){
        var key = room.name.toLowerCase();
        
        firebaseRef.child(paths.rooms + key).once('value', 
            function(data) {
                if (!data.exists()) {
                    firebaseRef.child(paths.rooms + key).set(room);
                }
            }   
        );
    },
    deleteRoom : function(room){
        console.log("I don't do anything useful yet.");
    }
};

module.exports = ChatAPI;