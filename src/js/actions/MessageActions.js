var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var ChatAPI = require('../api/ChatAPI');

var MessageActions = {
    sendMessage : function(messagePayload) {
        ChatAPI.sendMessage(messagePayload);
    }
};

module.exports = MessageActions;