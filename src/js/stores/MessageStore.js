var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

/* Constants */
var CHANGE_EVENT = 'change';

/* Data */
var _currentRoom = null;
var _messages = [];

/* Mutators */
var setCurrentRoom = function(roomName) {
    if (roomName != _currentRoom) {
        _messages = [];
    }
    _currentRoom = roomName;
}

var addMessage = function(newID, newMessage) {
    newMessage['id'] = newID;
    _messages.push(newMessage);
}

var removeMessage = function(removeID) {
    for (var i = _messages.length - 1; i >= 0; --i) {
        if (_messages[i].id === removeID) {
            _messages.splice(i, 1);
        }
    }
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
        case AppConstants.MESSAGE_FETCHED:
            setCurrentRoom(action.data.room);
            addMessage(action.data.id, action.data.message);
            MessageStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.MESSAGE_REMOVED:
            removeMessage(action.data);
            MessageStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = MessageStore;