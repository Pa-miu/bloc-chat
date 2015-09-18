'use strict';
var React = require('react');

var ChatAPI = require('./api/ChatAPI');
var ChatController = require('./components/ChatController');

var defaultUser = {
    username : 'Guest',
    currentRoom : 'dummy'
};

//ChatAPI.startSession();

ChatAPI.setUser(defaultUser);
ChatAPI.getRoomList();
ChatAPI.getMessages(defaultUser.currentRoom);

React.render(<ChatController />, document.getElementById('app'));