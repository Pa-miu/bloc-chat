var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _rooms = [];

var createRoom = function(newRoom){
    _rooms.push(newRoom);
};

var closeRoom = function(deleteRoom){
    delete _rooms[deleteRoom];
};

var RoomStore = assign({}, EventEmitter.prototype, {
    addChangeListener : function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener : function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    getRooms : function() {
        return _rooms;
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.actionType) {
        case AppConstants.CREATE_ROOM:
            createRoom(action.data);
            RoomStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.CLOSE_ROOM:
            closeRoom(action.data);
            RoomStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});


module.exports = RoomStore;