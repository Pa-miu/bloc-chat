var React = require('react');

var MessageList = React.createClass({    
    render : function () {
        return (
            <div className="message-list-wrapper">
                <div className="message-list">
                    {this.props.messages}
                </div>
                <div className="message-scroll"></div>
            </div>
        );
    }
});

module.exports = MessageList;