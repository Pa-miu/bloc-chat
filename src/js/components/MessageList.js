var React = require('React');
var MessageInstance = require('./MessageInstance');
var DateDivider = require('./DateDivider');

var MessageList = React.createClass({
    render : function () {
        var convertedMessages = this.props.messages.map(function(m) {
            var newMessage;
            if(m.hasOwnProperty('sender')){
                var newMessage = (
                    <MessageInstance
                        iconURL={m.iconURL}
                        sender={m.sender}
                        timestamp={m.timestamp}
                        content={m.content}
                    />
                );
            }
            else if (m.hasOwnProperty('date')){
                var newMessage = (
                    <DateDivider date={m.date}/>
                );
            }
            return newMessage;
        });
        return (
            <div className="message-list-wrapper">
                <div className="message-list">
                    {convertedMessages}
                </div>
                <div className="message-scroll"></div>
            </div>
        );
    }
});

module.exports = MessageList;