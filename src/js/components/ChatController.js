var RoomBox = require('./RoomBox');
var MessageBox = require('./MessageBox');
var CreateRoomModal = require('./CreateRoomModal');
var React = require('React/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

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
    
    createRoomModalGroup : function(modalOn) {
        if (modalOn) {
            var key = modalOn ? "ON" : "OFF";
            return (
                <ReactCSSTransitionGroup transitionName="animate">
                    <CreateRoomModal key={key} toggle={this.handleRoomCreateToggle}/>
                </ReactCSSTransitionGroup>
            )
        }
        else {
            return null;
        }
    },
    
    render : function() {
        var roomModalGroup = this.createRoomModalGroup(this.state.roomModal);
        /*
        return (
            <div>   
                <RoomBox toggle={this.handleRoomCreateToggle}/>
                <MessageBox/>
                {this.state.roomModal ? <CreateRoomModal toggle={this.handleRoomCreateToggle}/> : ''}
            </div>
        );
        */
        return (
            <div>   
                <RoomBox toggle={this.handleRoomCreateToggle}/>
                <MessageBox/>
                {roomModalGroup}
            </div>
        );
    }
});

module.exports = ChatController;