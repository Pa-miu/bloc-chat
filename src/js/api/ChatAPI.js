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
    createRoom : function(){
    }
};

module.exports = ChatAPI;