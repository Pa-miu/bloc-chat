var React = require('React');

var MessageInstance = React.createClass({
    render : function () {
        var bgStyle = {
            backgroundImage : 'url(' + this.props.iconURL + ')'
        }
        return (
            <div className="message-instance">
                <div className="message-sender-icon" style={bgStyle}></div>
                <div className="message-sender">{this.props.sender}</div>
                <div className="message-timestamp">{this.props.timestamp}</div>
                <div className="message-content">{this.props.content}</div>
            </div>
        );
    }
});

module.exports = MessageInstance;