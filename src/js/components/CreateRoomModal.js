var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var RoomActions = require('../actions/RoomActions');

var CreateRoomModal = React.createClass({
    getInitialState : function() {
        return({
            mounted : false
        });
    },
    
    componentDidMount : function() {
        this.setState({mounted : !this.state.mounted});
    },
    
    resetInput : function() {
        React.findDOMNode(this.refs.roomNameInput).value = '';
    },
    
    handleToggle : function() {
        this.resetInput();
        this.props.toggle();
        /*  
            This will "play" the form's reverse animation.
            But if the parent is removed from the DOM before
            the form has had a chance to complete its lifecycle,
            it will throw an error.
            
        this.setState({mounted : !this.state.mounted}); 
        */
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
    
    generateRoomCreateForm : function() {
        return (
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
        )
    },
    
    render : function(){
        return (
            <div className="modal-dialog" onKeyDown={this.handleKeyDown}>
                <div onClick={this.handleToggle} className="modal-dim"></div>
                <ReactCSSTransitionGroup transitionName="animate">
                    {this.state.mounted ? this.generateRoomCreateForm() : null}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});

module.exports = CreateRoomModal;