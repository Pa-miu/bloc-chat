var RoomHeader = require('./RoomHeader');

var RoomBox = React.createClass({
    render : function () {
        return (
            <div className="room-box noSelect">
                <RoomHeader/>
            </div>
        );
    }
});

module.exports = RoomBox;