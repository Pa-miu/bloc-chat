var React = require('react');

var MessageStore = require('../stores/MessageStore');

var MemberList = React.createClass({
    getInitialState : function() {
        return({
            members : MessageStore.getMembers();
        });
    },
    
    componentDidMount : function() {
    },
    
    _onUserChange : function() {
        this.setState({
        })
    },
    
    handleToggle : function() {
        this.props.toggle();
    },
    
    
    generateMembers : function() {
        return (
        )
    },
    
    render : function(){
        return (
        )
    }
});

module.exports = MemberList;