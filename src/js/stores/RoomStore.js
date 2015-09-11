var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _rooms = [];

var setRooms = function(rooms){
    for (var key in rooms) {
        _rooms.push(rooms[key]);
    }
}

var createRoom = function(newRoom){
    _rooms.push(newRoom);
};

var deleteRoom = function(deleteRoom){
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

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.ROOMS_FETCHED:
            setRooms(action.data);
            RoomStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.CREATE_ROOM:
            createRoom(action.data);
            RoomStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.DELETE_ROOM:
            deleteRoom(action.data);
            RoomStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});


module.exports = RoomStore;