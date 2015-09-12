var RoomBox = require('./RoomBox');
var MessageBox = require('./MessageBox');
var CreateRoomModal = require('./CreateRooModal');

var ChatController = React.createClass({
    render : function() {
        return (
            <div>   
                <RoomBox/>
                <MessageBox/>
                <CreateRoomModal/>
            </div>
        );
    }
});

module.exports = ChatController;