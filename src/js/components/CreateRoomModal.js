var React = require('React');
var RoomActions = require('../actions/RoomActions');

var CreateRoomModal = React.createClass({
    resetInput : function() {
        React.findDOMNode(this.refs.roomNameInput).value = '';
    },
    
    handleToggle : function() {
        this.resetInput();
        this.props.toggle();
    },
    
    handleKeyDown : function(event) {
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
        this.handleToggle();
    },
    
    render : function(){
        return (
            <div className="modal-dialog" key={this.props.key} onKeyDown={this.handleKeyDown}>
                <div onClick={this.handleToggle} className="modal-dim"></div>
                <form className="modal-form">
                    <div className="modal-header no-select">
                        Create a New Room
                    </div>
                    <div className="modal-body">
                        <p>Create a public room on the server every user can see and join.</p>
                        <div className="modal-entry-group">
                            <label className="modal-label no-select">Name</label>
                            <input className="modal-input" ref="roomNameInput" maxLength="20"/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="modal-button red no-select" onClick={this.handleToggle}>Cancel</div>
                        <div className="modal-button green no-select" onClick={this.handleSubmit}>Submit</div>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = CreateRoomModal;