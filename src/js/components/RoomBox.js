var React = require('React');

var RoomHeader = require('./RoomHeader');
var RoomNode = require('./RoomNode');
var RoomActions = require('../actions/RoomActions');
var RoomStore = require('../stores/RoomStore');

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
    
    _onChange : function() {
        this.setState({
            rooms : RoomStore.getRooms()
        })
    },
    
    handleRoomDelete : function(name) {
        RoomActions.deleteRoom(name);
    },
    
    objectToRoom : function(object) {
        return <RoomNode key={object.name} name={object.name} deleteRoom={this.handleRoomDelete}/>
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