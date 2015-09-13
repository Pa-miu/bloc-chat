var React = require('React');

var RoomNode = React.createClass({                          
    render : function() {
        return (
            <div className="room-node room-hover">
                {this.props.name}
            </div>
        );
    }
});

RoomNode.fromObject = function(object){
    return <RoomNode key={object.id} name={object.name}/>
}

module.exports = RoomNode;