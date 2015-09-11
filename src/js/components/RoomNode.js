var RoomNode = React.createClass({
    render : function() {
        return (
            <div className="room-node room-hover">
                {this.props.name}
            </div>
        );
    }
});

module.exports = RoomNode;