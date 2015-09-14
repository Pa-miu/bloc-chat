'use strict';
var React = require('react');

var ChatAPI = require('./api/ChatAPI');
var ChatController = require('./components/ChatController');

ChatAPI.getRooms();

React.render(<ChatController />, document.getElementById('app'));