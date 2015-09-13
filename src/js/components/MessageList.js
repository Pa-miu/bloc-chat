var React = require('React');
var MessageInstance = require('./MessageInstance');
var DateDivider = require('./DateDivider');

var MessageList = React.createClass({
    objectToMessage : function(object) {
        var newMessage;
        if(object.hasOwnProperty('sender')){
            newMessage = (
                <MessageInstance
                    key={object.id}
                    iconURL={object.iconURL}
                    sender={object.sender}
                    timestamp={object.timestamp}
                    content={object.content}
                />
            );
        }
        else if (object.hasOwnProperty('date')){
            newMessage = (
                <DateDivider key={object.id} date={object.date}/>
            );
        }
        return newMessage;
    },
        
    render : function () {
        var messages = this.props.messages.map(this.objectToMessage);
        return (
            <div className="message-list-wrapper">
                <div className="message-list">
                    {messages}
                </div>
                <div className="message-scroll"></div>
            </div>
        );
    }
});

module.exports = MessageList;