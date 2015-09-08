var RoomBox = require('./RoomBox');

var ChatController = React.createClass({
    render : function() {
        return (
            <div>
                <RoomBox/>
            </div>
        );
    }
});

module.exports = ChatController;