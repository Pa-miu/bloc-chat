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
            username : UserStore.getUsername(),
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
            username : UserStore.getUsername(),
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
            RoomActions.changeRoom(roomName, this.state.currentRoom, this.state.username);
        }
    },
    
    handleDeleteRoom : function(roomName) {
        for (var i = 0; i < this.state.rooms.length; ++i) {
            if (this.state.rooms[i].name === roomName) {
                index = i;
                break;
            }
        }
        var fallback = null;
        if (index - 1 >= 0) {
            fallback = this.state.rooms[index - 1].name;
        }
        else if (index + 1 < this.state.rooms.length) {
            fallback = this.state.rooms[index + 1].name;
        }
        RoomActions.deleteRoom(roomName, fallback, this.state.username);
    },
    
    objectToRoom : function(object) {
        return <RoomNode 
                    key={object.name + Date.now()} 
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