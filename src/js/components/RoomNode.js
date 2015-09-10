var RoomNode = React.createClass({
    render : function() {
        return (
            <div className="room-node room-hover" data-id={this.props.id} data-url={this.props.url}>
                {this.props.name}
            </div>
        );
    }
});

module.exports = RoomNode;