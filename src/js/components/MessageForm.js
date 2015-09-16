var React = require('react');

var MessageForm = React.createClass({
    componentDidMount : function () {
        document.addEventListener('keydown', this.handleKeyDown);
    },
    
    resetInput : function() {
        React.findDOMNode(this.refs.messageInput).value = '';
    },
    
    handleKeyDown : function(event) {
        console.log("test");
        if (event.keyCode == 13 && !event.shiftKey) {
            event.preventDefault();
            this.handleSubmit(); 
        }
        React.findDOMNode(this.refs.messageInput).focus();
    },
    
    handleSubmit : function() {
        var value = React.findDOMNode(this.refs.messageInput).value;
        if (value.length > 0) {
            this.props.submit(this.stripNewlines(value));
            this.resetInput();
        }
    },
    
    stripNewlines : function (string) {
        var result = string.replace(/\s*$/g, '');
        return result
    },
    
    render : function () {
        return (
            <form className="message-form message-sidebar-offset">
                <div className="message-input-wrapper no-select">
                    <textarea type="text" 
                        className="message-input no-select" 
                        ref="messageInput" 
                        onKeyDown={this.handleKeyDown}
                        placeholder="Submit a new message...">
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