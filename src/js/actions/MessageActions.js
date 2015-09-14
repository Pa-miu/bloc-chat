var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var ChatAPI = require('../api/ChatAPI');

var MessageActions = {
    fetchRoomMessages : function(name) {
        ChatAPI.getMessages(name);
    }
};

module.exports = MessageActions;