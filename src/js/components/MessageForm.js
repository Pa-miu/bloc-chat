var React = require('react');

var MessageForm = React.createClass({
    resetInput : function() {
        React.findDOMNode(this.refs.messageInput).value = '';
    },
    
    handleKeyDown : function(event) {
        if (event.keyCode == 13 && !event.shiftKey) {
            event.preventDefault();
            this.handleSubmit(); 
        }
    },
    
    handleSubmit : function() {
        var value = React.findDOMNode(this.refs.messageInput).value;
        if (value.length > 0) {
            this.props.submit(value);
            this.resetInput();
        }
    },
    
    render : function () {
        return (
            <form className="message-form message-sidebar-offset">
                <div className="message-input-wrapper no-select">
                    <textarea type="text" 
                        className="message-input no-select" 
                        ref="messageInput" 
                        onKeyDown={this.handleKeyDown}
                        placeholder="Submit a new message..." 
                        autoFocus>
                    </textarea>
                </div>
                <div className="message-send-wrapper" onClick={this.handleSubmit}>
                    <div className="ion-paper-airplane message-send-button"/>
                </div>
            </form>
        );
    }
});

module.exports = MessageForm;