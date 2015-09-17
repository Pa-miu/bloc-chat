var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

/* Constants */
var CHANGE_EVENT = 'change';

/* Data */
var _username = null;
var _currentRoom = null;
var _activeUsers = [];

/* Mutators */
var setUsername = function(newName){
    if (newName){
        _username = newName;
    }
};

var setCurrentRoom = function(roomJoined){
    if (roomJoined){
        _currentRoom = roomJoined;
    }
};

var setActiveUsers = function(userList){
    _activeUsers = userList;
};

/* Store */
var UserStore = assign({}, EventEmitter.prototype, {
    addChangeListener : function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    
    removeChangeListener : function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    
    getUsername : function() {
        return _username;
    },
    
    getCurrentRoom : function() {
        return _currentRoom;
    }
});

/* Registration */
AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.USER_FETCHED:
            setUsername(action.data.username);
            setCurrentRoom(action.data.currentRoom);
            UserStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.MESSAGE_FETCHED:
            setCurrentRoom(action.data.room);
            UserStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = UserStore;