var React = require('React');

var RoomHeader = React.createClass({
    render : function () {
        return(
            <div className="room-box-header">
                <div className="room-box-title">{this.props.title}</div>
                <div className="create-room-wrapper">
                    <a
                        className="ion-plus-circled create-room-button room-hover" 
                        href={'#' + this.props.modalTarget}>
                    </a>
                </div>
            </div>
        )
    }
});

module.exports = RoomHeader;