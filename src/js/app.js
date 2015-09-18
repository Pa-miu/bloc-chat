'use strict';
var React = require('react');

var ChatAPI = require('./api/ChatAPI');
var ChatController = require('./components/ChatController');

var savedUser = ChatAPI.startSession();
ChatAPI.changeUser(savedUser);
ChatAPI.getRoomList();
ChatAPI.getMessages(savedUser.currentRoom, null, savedUser.username);

React.render(<ChatController />, document.getElementById('app'));