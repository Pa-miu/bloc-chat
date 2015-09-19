var React = require('react');
var MessageForm = require('./MessageForm');

var SCROLL_ZONE = 50;

var MessageList = React.createClass({  
    componentDidMount : function () {
        listRef = React.findDOMNode(this.refs.messageList);
        listRef.scrollTop = listRef.scrollHeight;
    },
    
    componentDidUpdate : function () {
        listRef = React.findDOMNode(this.refs.messageList);
        
        if (listRef.scrollHeight - (listRef.scrollTop + listRef.clientHeight) > SCROLL_ZONE) {
            listRef.scrollTop = listRef.scrollHeight;
        }
    },
    
    render : function () {
        return (
            <div className="message-list-wrapper" >
                <div className="message-list" ref="messageList">
                    {this.props.messages}
                </div>
                <MessageForm submit={this.props.submit} activemodal={this.props.activemodal}/>
            </div>
        );
    }
});

module.exports = MessageList;