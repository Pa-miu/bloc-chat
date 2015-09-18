var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

/* Constants */
var CHANGE_EVENT = 'change';

/* Data */
var _rooms = [];

/* Mutators */
var setRooms = function(fetchedRooms){
    _rooms.splice(0, _rooms.length);
    for (var key in fetchedRooms) {
        _rooms.push(fetchedRooms[key]);
    }
}

/* Store */
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

/* Registration */
AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.ROOM_LIST_FETCHED:
            setRooms(action.data);
            RoomStore.emit(CHANGE_EVENT);
            action.dfd && action.dfd.resolve(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = RoomStore;
