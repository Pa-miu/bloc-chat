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
        /*
            The next line is rather fragile. It'll trigger the component
            removal process (and animation) on the inner form. If the form's animation 
            lasts as long as its parent's animation, then it will throw an error,
            because the child is removed from the DOM before React can call its 
            componentDidUnmount() function, which happens at the end of the 
            transition event. This will cause React to reference 'undefined', 
            since ths child no longer exists.

            Therefore, the form's *-leave animation must be shorter than 
            the modal's *-leave animation. It might sometimes throw
            and error anyway because the timing is unrelibale. A difference of 0.1s
            between animations seems to prevent most errors.
        */  
        this.setState({mounted : !this.state.mounted});
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
            <form key="userForm" className="modal-form">
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
        var userForm = this.state.mounted ? this.generateUserForm() : null;
        return (
            <div className="modal-dialog" onKeyDown={this.handleKeyDown}>
                <div onClick={this.handleToggle} className="modal-dim"></div>
                <ReactCSSTransitionGroup transitionName="animate">
                    {userForm}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});

module.exports = UserModal;