var React = require('react');

var RoomNode = React.createClass({
    handleChangeRoom : function() {
        this.props.changeRoom(this.props.name);
    },
    
    handleDeleteRoom : function() {
        this.props.deleteRoom(this.props.name);
    },
    
    render : function() {
        return (
            <div className="room-node room-hover" onClick={this.handleChangeRoom}>
                <div className="room-node-label">{this.props.name}</div>
                <div className="room-button-wrapper delete-room-position red-hover">
                    <div className="ion-close delete-room-button" onClick={this.handleDeleteRoom}></div>
                </div>
            </div>
        );
    }
});

module.exports = RoomNode;