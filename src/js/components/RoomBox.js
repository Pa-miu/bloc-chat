var React = require('react');

var RoomHeader = require('./RoomHeader');
var RoomNode = require('./RoomNode');

var RoomActions = require('../actions/RoomActions');
var RoomStore = require('../stores/RoomStore');
var UserStore = require('../stores/UserStore');

var RoomBox = React.createClass({
    getInitialState : function() {
        return {
            rooms : RoomStore.getRooms(),
            currentRoom : UserStore.getCurrentRoom()
        }
    },
    
    componentDidMount : function(){
        UserStore.addChangeListener(this._onUserChange);
        RoomStore.addChangeListener(this._onRoomChange);
    },
    
    componentWillUnmount : function(){
        UserStore.removeChangeListener(this._onUserChange);
        RoomStore.removeChangeListener(this._onRoomChange);
    },
    
    _onUserChange : function() {
        this.setState({
            currentRoom : UserStore.getCurrentRoom()
        })
    },
    
    _onRoomChange : function() {
        this.setState({
            rooms : RoomStore.getRooms(),
        })
    },
    
    handleChangeRoom : function(roomName) {
        if (roomName != this.state.currentRoom) {
            RoomActions.changeRoom(roomName);
        }
    },
    
    handleDeleteRoom : function(roomName) {
        RoomActions.deleteRoom(roomName);
    },
    
    objectToRoom : function(object) {
        return <RoomNode 
                    key={object.name} 
                    name={object.name} 
                    changeRoom={this.handleChangeRoom} 
                    deleteRoom={this.handleDeleteRoom}
                />
    },
    
    render : function () {
        var roomNodes = this.state.rooms.map(this.objectToRoom);
        return (
            <div className="room-box no-select">
                <RoomHeader title="Open Rooms" toggle={this.props.toggle}/>
                {roomNodes}
            </div>
        );
    }
});

module.exports = RoomBox;