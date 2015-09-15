var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

/* Constants */
var CHANGE_EVENT = 'change';

/* Data */
var _currentRoom = '';
var _messages = [];

/* Mutators */
var setCurrentRoom = function(roomName) {
    _currentRoom = roomName;
}

var setMessages = function(fetchedMessages) {
    _messages.splice(0, _messages.length);
    for (var key in fetchedMessages) {
        _messages.push(fetchedMessages[key]);
    }
}

var addMessage = function(newMessage) {
    _messages.push(newMessage);
}

/* Store */
var MessageStore = assign({}, EventEmitter.prototype, {
    addChangeListener : function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    
    removeChangeListener : function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    
    getCurrentRoom : function() {
        return _currentRoom;
    },
    
    getMessages : function() {
        return _messages;
    }
});

/* Registration */
AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.ROOM_MESSAGES_FETCHED:
            setCurrentRoom(action.data.room);
            setMessages(action.data.messages);
            MessageStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.NEW_MESSAGE_FETCHED:
            addMessage(action.data);
            MessageStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = MessageStore;