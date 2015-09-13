var CreateRoomModal = React.createClass({
    _handleClose : function() {
        this.props.close(this);
    },
    
    _handleSubmit : function() {
        var newRoom = {
            name : ""
        };
        this.props.submit(newRoom);
    },
    
    render : function(){
        return (
            <div className="modal-dialog">
                <div className="modal-dim" onClick={this._handleClose}></div>
                <form className="modal-form">
                    <div className="modal-header">
                        Create a New Room
                    </div>
                    <div className="modal-body">
                        <p>Create a public room on the server every user can see and join.</p>
                        <div className="modal-entry-group">
                            <label className="modal-label" for="room-name-input">Name</label>
                            <input className="modal-input" id="room-name-input"></input>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="modal-button red" onClick={this._handleClose}>Cancel</div>
                        <div className="modal-button green" onClick={this._handleSubmit}>Submit</div>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = CreateRoomModal;