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
        var name = room.name.toLowerCase();
        
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
    }
};

module.exports = ChatAPI;