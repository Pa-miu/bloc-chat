var React = require('react');

var MessageForm = React.createClass({
    render : function () {
        return (
            <form className="message-form message-sidebar-offset">
                <div className="message-input-wrapper">
                    <textarea type="text" className="message-input" placeholder="Submit a new message..."></textarea>
                </div>
                <div className="message-send-wrapper">
                    <div className="ion-paper-airplane message-send-button"></div>
                </div>
            </form>
        );
    }
});

module.exports = MessageForm;