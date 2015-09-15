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
    createRoom : function(room){   
        firebaseRef.child(paths.rooms + name).once('value', 
            function(data) {
                if (!data.exists()) {
                    firebaseRef.child(paths.rooms + name).set(room);
                }
            }   
        );
    },
    
    deleteRoom : function(name){
        firebaseRef.child(paths.rooms + name).once('value',
            function(data) {
                if (data.exists()) {
                    firebaseRef.child(paths.rooms + name).set(null);
                }
            }  
        );
    },
    
    getRoomList : function(){
        firebaseRef.child(paths.rooms).on('value', 
            function(data) {
                ServerActions.roomListFetched(data.val());
            },
            function(error) {
                console.log('ChatAPI.getRoom() encountered an error: ' + error.getCode());
            }
        );
    },
    
    getMessages : function(roomName){
        firebaseRef.child(paths.messages + roomName).once('value', 
            function(data) {
                var payload = {room : data.key(), messages : data.val()};
                ServerActions.roomMessagesFetched(payload);
            },
            function(error) {
                console.log('ChatAPI.getMessages() encountered an error: ' + error.getCode());
            }
        );
    },
};

module.exports = ChatAPI;