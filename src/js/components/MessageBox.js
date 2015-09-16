var React = require('react');

var MessageHeader = require('./MessageHeader');
var MessageList = require('./MessageList');
var MessageInstance = require('./MessageInstance');
var DateDivider = require('./DateDivider');
var MessageForm = require('./MessageForm');
var MessageStore = require('../stores/MessageStore');
var MessageActions = require('../actions/MessageActions');
var RoomActions = require('../actions/RoomActions');

var defaultRoom = 'dummy';

var MessageBox = React.createClass({
    getInitialState : function() {
        return {
            currentRoom : MessageStore.getCurrentRoom(),
            messages : MessageStore.getMessages()
        }
    },
    
    componentDidMount : function(){
        MessageStore.addChangeListener(this._onChange);
        RoomActions.changeRoom(defaultRoom);
    },
    
    componentWillUnmount : function(){
        MessageStore.removeChangeListener(this._onChange);
    },
    
    _onChange : function() {
        this.setState({
            currentRoom : MessageStore.getCurrentRoom(),
            messages : MessageStore.getMessages()
        });
    },
    
    handleSubmitMessage : function(messageText) {
        var username = 'dummySender';
        var userIcon = '';
        var messageTime = new Date().toUTCString(); 
        var messageObject = {
            sender : username,
            iconURL : userIcon,
            timestamp : messageTime,
            content : messageText
        };
        
        var messagePayload = {
            room : defaultRoom,
            message : messageObject
        };
            
        MessageActions.sendMessage(messagePayload);
    },
    
    objectToMessage : function(object) {
        var utcTime = new Date(object.timestamp);
        var options = {hour12 : false, hour : '2-digit', minute : '2-digit'}
        var truncateTime = utcTime.toLocaleTimeString(undefined, options);
        var newMessage = (
            <MessageInstance
                key={object.id}
                sender={object.sender}
                iconURL={object.iconURL}
                timestamp={truncateTime}
                content={object.content}
            />
        );
        return newMessage;
    },
    
    render : function () {
        return (
            <div className="message-box message-sidebar-offset">
                <MessageHeader roomname={this.state.currentRoom}/>
                <MessageList messages={this.state.messages.map(this.objectToMessage)}/>
                <MessageForm submit={this.handleSubmitMessage}/>
            </div>
        );
    }
});

module.exports = MessageBox;