var RoomBox = require('./RoomBox');
var MessageBox = require('./MessageBox');
var CreateRoomModal = require('./CreateRoomModal');

var createRoomID = 'create-room';

var ChatController = React.createClass({
    render : function() {
        return (
            <div>   
                <RoomBox modalTarget={createRoomID}/>
                <MessageBox/>
                <CreateRoomModal modalID={createRoomID}/>
            </div>
        );
    }
});

module.exports = ChatController;