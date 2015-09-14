var React = require('react');

var RoomNode = React.createClass({
    handleClick : function() {
        this.props.deleteRoom(this.props.name);
    },
    
    render : function() {
        return (
            <div className="room-node room-hover">
                <div className="room-node-label">{this.props.name}</div>
                <div className="room-button-wrapper delete-room-position">
                    <div className="ion-close delete-room-button room-hover" onClick={this.handleClick}></div>
                </div>
            </div>
        );
    }
});

module.exports = RoomNode;