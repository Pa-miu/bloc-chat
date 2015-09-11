var Firebase = require('firebase');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var RoomActions = require('../actions/RoomActions');

var firebaseRef = new Firebase('https://kusera-bloc-chat.firebaseio.com');
var roomsPath = '/rooms/';
var messagesPath = '/messages/';
var membersPath = '/members/';

var ChatAPI = {
    getRoom : function(){
        firebaseRef.child(roomsPath).once('value', 
            function(data) {
                RoomActions.roomFetched(data.val());
            },
            function(err) {
                console.log('getRoom encountered' + err.getCode());
            }
        );
    }
};

module.exports = ChatAPI;