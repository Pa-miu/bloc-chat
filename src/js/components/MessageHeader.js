var React = require('react');

var MessageHeader = React.createClass({
    render : function () {
        return (
            <div className="message-box-header">
                <div className="message-room-name">{this.props.roomname}</div> 
                <div className="message-user no-select " onClick={this.props.toggle}>@{this.props.username}</div> 
            </div>
        );
    }
});

module.exports = MessageHeader;