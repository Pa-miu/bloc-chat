var RoomHeader = React.createClass({
    _onClick : function() {
        var newRoom = {
            name : "Room 1",
        };
        this.props.create(newRoom);
    },
    
    render : function () {
        return(
            <div className="room-box-header">
                <div className="room-box-title">{this.props.title}</div>
                <div className="create-room-wrapper">
                     <div className="ion-plus-circled create-room-button room-hover" onClick={this._onClick}></div>
                </div>
            </div>
        )
    }
});

module.exports = RoomHeader;