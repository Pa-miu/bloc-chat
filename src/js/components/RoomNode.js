var React = require('React');

var RoomNode = React.createClass({                          
    render : function() {
        return (
            <div className="room-node room-hover">
                <div className="room-node-label">{this.props.name}</div>
                <div className="room-button-wrapper delete-room-position">
                    <div className="ion-close delete-room-button room-hover" onClick={this.props.delete}></div>
                </div>
            </div>
        );
    }
});

module.exports = RoomNode;