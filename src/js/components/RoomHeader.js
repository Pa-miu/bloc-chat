var React = require('React');

var RoomHeader = React.createClass({
    render : function () {
        return(
            <div className="room-box-header">
                <div className="room-header-label">{this.props.title}</div>
                <div className="room-button-wrapper create-room-position">
                    <div className="ion-plus-circled create-room-button room-hover" onClick={this.props.toggle}></div>
                </div>
            </div>
        )
    }
});

module.exports = RoomHeader;