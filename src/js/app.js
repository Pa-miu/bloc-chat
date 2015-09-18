'use strict';
var React = require('react');

var ChatAPI = require('./api/ChatAPI');
var ChatController = require('./components/ChatController');

var savedUser = ChatAPI.startSession();

React.render(<ChatController />, document.getElementById('app'));

ChatAPI.changeUser(savedUser);
ChatAPI.getRoomList().then(function() {
  ChatAPI.changeRoom(savedUser.currentRoom, null, savedUser.username);
});
