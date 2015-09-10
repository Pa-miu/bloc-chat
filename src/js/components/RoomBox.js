var RoomHeader = require('./RoomHeader');
var RoomNode = require('./RoomNode');
var RoomStore = require('../stores/RoomStore');
var RoomActions = require('../actions/RoomActions');

var RoomBox = React.createClass({
    render : function () {
        return (
            <div className="room-box noSelect">
                <RoomHeader title="Open Rooms"/>
                <RoomNode url="Room1.db" name="Room1" />
                <RoomNode url="Room2.db" name="Room2" />
                <RoomNode url="Room2.db" name="Room3" />
            </div>
        );
    }
});

module.exports = RoomBox;