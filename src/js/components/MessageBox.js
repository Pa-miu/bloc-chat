var React = require('react');

var MessageHeader = require('./MessageHeader');
var MessageList = require('./MessageList');
var MessageInstance = require('./MessageInstance');
var DateDivider = require('./DateDivider');
var MessageForm = require('./MessageForm');
var MessageStore = require('../stores/MessageStore');
var MessageActions = require('../actions/MessageActions');

var MessageBox = React.createClass({
    getInitialState : function() {
        return {
            currentRoom : MessageStore.getCurrentRoom(),
            messages : MessageStore.getMessages()
        }
    },
    
    componentDidMount : function(){
        MessageStore.addChangeListener(this._onChange);
        MessageActions.fetchRoomMessages(this.state.currentRoom);
    },
    
    componentWillUnmount : function(){
        MessageStore.removeChangeListener(this._onChange);
    },
    
    _onChange : function() {
        this.setState({
            currentRoom : MessageStore.getCurrentRoom(),
            messages : MessageStore.getMessages()
        })
    },
    
    objectToMessage : function(object) {
        var messageDate = new Date(object.timestamp);
        var options = {hour12 : false, hour : '2-digit', minute : '2-digit'}
        var truncateTime = messageDate.toLocaleTimeString(undefined, options);
        var newMessage = (
            <MessageInstance
                key={object.sender + messageDate.toString()}
                sender={object.sender}
                iconURL={object.iconURL}
                timestamp={truncateTime}
                content={object.content}
            />
        );
        return newMessage;
    },
    
    render : function () {
        var messages = this.state.messages.map(this.objectToMessage)
        return (
            <div className="message-box message-sidebar-offset">
                <MessageHeader roomname={this.state.currentRoom}/>
                <MessageList messages={messages}/>
                <MessageForm/>
            </div>
        );
    }
});

module.exports = MessageBox;