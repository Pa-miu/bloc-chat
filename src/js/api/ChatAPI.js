var Firebase = require('firebase');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ServerActions = require('../actions/ServerActions');

var lStorage = require('./store.min.js');
var firebaseRef = new Firebase('https://kusera-bloc-chat.firebaseio.com');
var paths = {
    rooms : '/rooms/',
    messages : '/messages/',
    members : '/members/',
    online : '/online/'
};
var DEFAULT_NAME = 'guest';
var DEFAULT_ROOM = 'landing';

var messagesTemplate = function (name){
    return {
        "0greeting" : {
            "sender" : "Server",
            "timestamp" : new Date().toUTCString(),
            "iconURL" : "",
            "content" : "This is your room!"
        }
    }
};

// Extracted to reuse in createMessage, deleteMessage and getMessages
var handleChangeRoom = function(roomName, lastRoom, username) {
    firebaseRef.child(paths.messages + roomName).on('child_added', 
        function(data) {
            lStorage.set('currentRoom', roomName);
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
    
    if (lastRoom) {
        firebaseRef.child(paths.messages + lastRoom).off();
        firebaseRef.child(paths.members + lastRoom).off();
        firebaseRef.child(paths.members + lastRoom + '/' + username).set(null);
        firebaseRef.child(paths.members + lastRoom + '/' + username).onDisconnect().cancel();
    }
    firebaseRef.child(paths.members + roomName + '/' + username).set(true);
    firebaseRef.child(paths.members + roomName + '/' + username).onDisconnect().remove();
    
    firebaseRef.child(paths.members + roomName).on('value', 
        function(data) {
            ServerActions.membersFetched(data.val());
        },
        function(error) {
            console.log('ChatAPI.handleChangeRoom() encountered an error during removal: ' + error.getCode());
        }
    );
};

var ChatAPI = {
    startSession : function() {
        var user = {
            username : lStorage.get('username'),
            currentRoom : lStorage.get('currentRoom')
        }
        
        if (!user.username){
            var guestNum = '000' + Math.floor(Math.random() * 10000);
            guestNum = guestNum.substr(guestNum.length - 4);
            user.username = DEFAULT_NAME + guestNum;
            user.currentRoom = DEFAULT_ROOM;
            lStorage.set('username', user.username);
            lStorage.set('currentRoom', user.currentRoom);
        }
        
        return user;
    },
    
    changeUser : function(newUser, lastUser, currentRoom) {
        lStorage.set('username', newUser.username);
        ServerActions.userFetched(newUser);
        firebaseRef.child(paths.rooms + currentRoom)
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
    
    createRoom : function(newRoom, currentRoom, username){
        var name = newRoom.name;
        firebaseRef.child(paths.rooms + name).once('value', 
            function(data) {
                if (!data.exists()){ 
                    firebaseRef.child(paths.rooms + name).set(newRoom);
                    firebaseRef.child(paths.messages + name).set(messagesTemplate());
                    handleChangeRoom(newRoom.name, currentRoom, username);
                }
            },
            function(error) {
                console.log('ChatAPI.createRoom() encountered an error: ' + error.getCode());
            }
        );
    },
    
    deleteRoom : function(roomName, fallbackRoom, username){
        firebaseRef.child(paths.rooms + roomName).once('value',
            function(data) {
                if (data.exists()){ 
                    firebaseRef.child(paths.rooms + roomName).set(null); 
                    firebaseRef.child(paths.messages + roomName).set(null);
                    firebaseRef.child(paths.members + roomName).set(null);
                    handleChangeRoom(fallbackRoom, null, username);
                }
            },
            function(error) {
                console.log('ChatAPI.deleteRoom() encountered an error: ' + error.getCode());
            }
        );
        firebaseRef.child(paths.rooms + roomName).off();
    },
    
    changeRoom : function(roomName, lastRoom, username){
        handleChangeRoom(roomName, lastRoom, username);
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
    }
};

module.exports = ChatAPI;