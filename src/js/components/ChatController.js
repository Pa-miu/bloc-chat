var React = require('react');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var RoomBox = require('./RoomBox');
var MessageBox = require('./MessageBox');
var CreateRoomModal = require('./CreateRoomModal');

var createRoomID = 'create-room';

var ChatController = React.createClass({
    getInitialState : function() {
        return({
            roomModal : false
        });
    },
    
    handleRoomCreateToggle : function() {
        this.setState({roomModal : !this.state.roomModal});
    },
    
    generateRoomCreateModal : function() {
        return (
            <CreateRoomModal toggle={this.handleRoomCreateToggle}/>
        )
    },
    
    render : function() {
        return (
            <div>   
                <RoomBox toggle={this.handleRoomCreateToggle}/>
                <MessageBox/>
                <ReactCSSTransitionGroup transitionName="animate">
                    {this.state.roomModal ? this.generateRoomCreateModal() : null}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

module.exports = ChatController;