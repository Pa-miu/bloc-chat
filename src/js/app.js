'use strict';
var React = require('React');
var ChatController = require('./components/ChatController');
var ChatAPI = require('./api/ChatAPI');

ChatAPI.getRooms();

React.render(<ChatController />, document.getElementById('app'));