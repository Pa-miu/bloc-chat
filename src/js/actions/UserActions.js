var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var ChatAPI = require('../api/ChatAPI');

var UserActions = {
    changeUser : function(newUser, lastUser, currentRoom) {
        ChatAPI.changeUser(newUser, lastUser, currentRoom);
    }
};

module.exports = UserActions;