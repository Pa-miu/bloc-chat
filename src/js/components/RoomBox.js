var RoomHeader = require('./RoomHeader');
var RoomNode = require('./RoomNode');
var RoomStore = require('../stores/RoomStore');

var RoomBox = React.createClass({
    getInitialState : function() {
        return {
            rooms : RoomStore.getRooms()
        }
    },
    
    componentDidMount : function(){
        RoomStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount : function(){
        RoomStore.removeChangeListener(this._onChange);
    },
    
    _onChange : function() {
        this.setState({
            rooms : RoomStore.getRooms()
        })
    },
    
    render : function () {
        var roomNodes = this.state.rooms.map(RoomNode.fromObject);
        return (
            <div className="room-box noSelect">
                <RoomHeader title="Open Rooms" modalTarget={this.props.modalTarget}/>
                {roomNodes}
            </div>
        );
    }
});

module.exports = RoomBox;