var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var ChatAPI = require('../api/ChatAPI');

var UserActions = {
    changeUser : function(newUser, currentRoom) {
        ChatAPI.changeUser(newUser, currentRoom);
    }
};

module.exports = UserActions;