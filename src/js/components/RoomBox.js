var RoomHeader = require('./RoomHeader');
var RoomNode = require('./RoomNode');
var RoomStore = require('../stores/RoomStore');
var RoomActions = require('../actions/RoomActions');

var convertRoom = function(room){
    var newNode = (
        <RoomNode name={room.name}/>
    );
    return newNode;
}

var RoomBox = React.createClass({
    getInitialState : function() {
        return {
            rooms : RoomStore.getRooms()
        }
    },
    
    componentDidMount : function(){
        RoomStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount : function(){
        RoomStore.removeChangeListener(this._onChange);
    },
    
    handleSubmitRoom : function(submitRoom){
        RoomActions.submitRoom(submitRoom);
    },
    
    handleCreateRoom : function(newRoom){
        RoomActions.createRoom(newRoom);
    },
    
    handleDeleteRoom : function(deleteRoom){
        RoomActions.deleteRoom(deleteRoom);
    },
    
    _onChange : function() {
        this.setState({
            rooms : RoomStore.getRooms()
        })
    },
    
    render : function () {
        var roomNodes = this.state.rooms.map(convertRoom);
        return (
            <div className="room-box noSelect">
                <RoomHeader title="Open Rooms" create={this.handleSubmitRoom}/>
                {roomNodes}
            </div>
        );
    }
});

module.exports = RoomBox;