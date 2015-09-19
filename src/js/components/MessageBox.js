var React = require('react');

var MessageHeader = require('./MessageHeader');
var MessageList = require('./MessageList');
var MessageInstance = require('./MessageInstance');
var DateDivider = require('./DateDivider');

var MessageActions = require('../actions/MessageActions');
var MessageStore = require('../stores/MessageStore');
var UserStore = require('../stores/UserStore');

var MessageBox = React.createClass({
    getInitialState : function() {
        return {
            username : UserStore.getUsername(),
            currentRoom : UserStore.getCurrentRoom(),
            messages : MessageStore.getMessages()
        }
    },
    
    componentDidMount : function(){
        UserStore.addChangeListener(this._onUserChange);
        MessageStore.addChangeListener(this._onMessageChange);
    },
    
    componentWillUnmount : function(){
        UserStore.removeChangeListener(this._onUserChange);
        MessageStore.removeChangeListener(this._onMessageChange);
    },
    
    _onUserChange : function() {
        this.setState({
            username : UserStore.getUsername(),
            currentRoom : UserStore.getCurrentRoom()
        });
    },
    
    _onMessageChange : function() {
        this.setState({
            messages : MessageStore.getMessages()
        });
    },
    
    handleSubmitMessage : function(messageText) {
        var username = this.state.username;
        var userIcon = '';
        var messageTime = new Date().toUTCString(); 
        var messageObject = {
            sender : username,
            iconURL : userIcon,
            timestamp : messageTime,
            content : messageText
        };
        
        var messagePayload = {
            room : this.state.currentRoom,
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
                <MessageHeader roomname={this.state.currentRoom} username={this.state.username} toggle={this.props.toggle}/>
                <MessageList 
                    messages={this.state.messages.map(this.objectToMessage)}
                    submit={this.handleSubmitMessage} 
                    activemodal={this.props.activemodal}
                />
            </div>
        );
    }
});

module.exports = MessageBox;