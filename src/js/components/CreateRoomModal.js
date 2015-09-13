var React = require('React');
var RoomActions = require('../actions/RoomActions');

var CreateRoomModal = React.createClass({    
    handleKey : function(event) {
        if (event.keyCode == 13) {
            this.handleSubmit(); 
        }
    },
    
    handleSubmit : function() {
        var value = React.findDOMNode(this.refs.roomNameInput).value;
        if (value.length > 0) {
            var room = {
                name : value
            };
            RoomActions.createRoom(room);
        }
        this.resetInput();
    },
    
    resetInput : function() {
        React.findDOMNode(this.refs.roomNameInput).value = '';
    },
    
    render : function(){
        return (
            <div className="modal-dialog" id={this.props.modalID} onKeyDown={this.handleKey}>
                <a href="#" onClick={this.resetInput}><div className="modal-dim"></div></a>
                <form className="modal-form">
                    <div className="modal-header">
                        Create a New Room
                    </div>
                    <div className="modal-body">
                        <p>Create a public room on the server every user can see and join.</p>
                        <div className="modal-entry-group">
                            <label className="modal-label" for="room-name-input">Name</label>
                            <input className="modal-input" id="room-name-input" ref="roomNameInput" maxLength="20"/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a href="#" onClick={this.resetInput}><div className="modal-button red no-select">Cancel</div></a>
                        <div className="modal-button green no-select" onClick={this.handleSubmit}>Submit</div>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = CreateRoomModal;