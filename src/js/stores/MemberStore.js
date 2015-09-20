var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

/* Constants */
var CHANGE_EVENT = 'change';

/* Data */
var _members = [];

/* Mutators */
var setMembers = function(memberList) {
    _members.splice(0, _members.length);
    for (var key in memberList) {
        _members.push(key);
    }
    console.log(_members);
}

/* Store */
var MessageStore = assign({}, EventEmitter.prototype, {
    addChangeListener : function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    
    removeChangeListener : function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    
    getMembers : function () {
        return _members;
    }
});

/* Registration */
AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.MEMBERS_FETCHED:
            setMembers(action.data);
            MessageStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = MessageStore;