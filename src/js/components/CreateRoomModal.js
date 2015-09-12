var CreateRoomModal = React.createClass({
    _hideMyself : function() {
        this.props.toggle(this);
    },
    
    _handleSubmit : function() {
        var newRoom = {
            name : ""
        };
        this.props.create(newRoom);
    },
    
    render : function(){
        return (
            <div className="modal-background">
                <form className="modal-form">
                    <div className="modal-header">
                        Create a New Room
                    </div>
                    <div className="modal-body">
                        <label className="modal-label">
                            Room name:
                            <input className="modal-input"></input>
                        </label>
                    </div>
                    <div className="modal-footer">
                        <button className="modal-cancel">Cancel</button>
                        <button className="modal-submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = CreateRoomModal;