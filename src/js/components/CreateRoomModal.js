var CreateRoomModal = React.createClass({
    _handleSubmit : function() {
        var newRoom = {
            name : ""
        };
        this.props.submit(newRoom);
    },
    
    render : function(){
        return (
            <div className="modal-dialog" id={this.props.modalID}>
                <a href="#"><div className="modal-dim"></div></a>
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
                        <a href="#"><div className="modal-button red">Cancel</div></a>
                        <div className="modal-button green" onClick={this._handleSubmit}>Submit</div>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = CreateRoomModal;