var React = require('react');

var MessageInstance = React.createClass({
    render : function () {
        return (
            <div className="message-instance">
                <div className="message-sender">{this.props.sender}</div>
                <div className="message-sender-icon" style={{backgroundImage : 'url(' + this.props.iconURL + ')'}}></div>
                <div className="message-timestamp">{this.props.timestamp}</div>
                <div className="message-content">{this.props.content}</div>
            </div>
        );
    }
});

module.exports = MessageInstance;