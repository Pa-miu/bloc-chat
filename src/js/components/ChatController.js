var RoomBox = require('./RoomBox');
var MessageBox = require('./MessageBox');

var ChatController = React.createClass({
    render : function() {
        return (
            <div>
                <RoomBox/>
                <MessageBox/>
            </div>
        );
    }
});

module.exports = ChatController;