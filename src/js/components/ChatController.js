var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var RoomBox = require('./RoomBox');
var MessageBox = require('./MessageBox');
var CreateRoomModal = require('./CreateRoomModal');
var UserModal = require('./UserModal');

var ChatController = React.createClass({
    getInitialState : function() {
        return({
            roomModal : false,
            userModal : false
        });
    },
    
    handleGetModalActive : function() {
        return !this.state.roomModal && !this.state.userModal;
    },
    
    handleRoomCreateToggle : function() {
        this.setState({roomModal : !this.state.roomModal});
    },
    
    handleUserToggle : function() {
        this.setState({userModal : !this.state.userModal});
    },
    
    generateRoomCreateModal : function() {
        return (
            <CreateRoomModal toggle={this.handleRoomCreateToggle}/>
        )
    },
    
    generateUserModal : function() {
        return (
            <UserModal toggle={this.handleUserToggle}/>
        )
    },
    
    render : function() {
        var roomModal = this.state.roomModal ? this.generateRoomCreateModal() : null;
        var userModal = this.state.userModal ? this.generateUserModal() : null;
        return (
            <div>   
                <RoomBox toggle={this.handleRoomCreateToggle}/>
                <MessageBox 
                    toggle={this.handleUserToggle}
                    activemodal={this.handleGetModalActive}
                />
                <ReactCSSTransitionGroup transitionName="animate">
                    {roomModal}
                    {userModal}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

module.exports = ChatController;