var React = require('React/addons');
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
    
    generateRoomCreateModal : function(modalOn) {
        if (modalOn) {
            return (
                <CreateRoomModal toggle={this.handleRoomCreateToggle}/>
            )
        }
        else {
            return null;
        }
    },
    
    render : function() {
        var roomModal = this.generateRoomCreateModal(this.state.roomModal);
        return (
            <div>   
                <RoomBox toggle={this.handleRoomCreateToggle}/>
                <MessageBox/>
                <ReactCSSTransitionGroup transitionName="animate">
                    {roomModal}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

module.exports = ChatController;