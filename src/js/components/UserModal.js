var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var UserActions = require('../actions/UserActions');
var UserStore = require('../stores/UserStore');
                        
var UserModal = React.createClass({
    getInitialState : function() {
        return{
            mounted : false,
            username : UserStore.getUsername(),
            currentRoom : UserStore.getCurrentRoom()
        };
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
    },
    
    handleKeyDown : function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            this.handleSubmit(); 
        }
    },
    
    handleSubmit : function() {
        var value = React.findDOMNode(this.refs.roomNameInput).value;
        if (value.length > 0) {
            var newUser = {
                username : value
            };
            UserActions.changeUser(newUser, this.state.username, this.state.currentRoom);
        }
        this.handleToggle();
    },
    
    generateUserForm : function() {
        return (
            <form className="modal-form">
                <div className="modal-header no-select">
                    User Options
                </div>
                <div className="modal-body">
                    <p>Change your display name, @{this.state.username}.</p>
                    <div className="modal-entry-group">
                        <label className="modal-label no-select">New Name</label>
                        <input className="modal-input" ref="roomNameInput" maxLength="16" autoFocus/>
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
                    {this.state.mounted ? this.generateUserForm() : null}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});

module.exports = UserModal;