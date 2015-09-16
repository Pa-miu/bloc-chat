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
    
    sendMessage : function(messagePayload) {
        firebaseRef.child(paths.messages + messagePayload.room).once('value', 
            function(data) {
                firebaseRef.child(paths.messages + messagePayload.room).push(messagePayload.message);
            },
            function(error) {
                console.log('ChatAPI.sentMessage() encountered an error: ' + error.getCode());
            }
        );
    },
    
    getMessages : function(roomName){
        firebaseRef.child(paths.messages + roomName).on('child_added', 
            function(data) {
                var payload = {room : roomName, id : data.key(), message : data.val()};
                ServerActions.messageFetched(payload);
            },
            function(error) {
                console.log('ChatAPI.getMessages() encountered an error during fetch: ' + error.getCode());
            }
        );
        
        firebaseRef.child(paths.messages + roomName).on('child_removed', 
            function(data) {
                ServerActions.messageRemoved(data.key());
            },
            function(error) {
                console.log('ChatAPI.getMessages() encountered an error during removal: ' + error.getCode());
            }
        );
    },
    
    
};

module.exports = ChatAPI;