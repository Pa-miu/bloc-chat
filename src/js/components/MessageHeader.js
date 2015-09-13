var React = require('React');

var MessageHeader = React.createClass({
    render : function () {
        return (
            <div className="message-box-header noSelect message-sidebar-offset">
                <div className="message-room-name">{this.props.roomname}</div> 
            </div>
        );
    }
});

module.exports = MessageHeader;