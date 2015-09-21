var React = require('react');

var MemberStore = require('../stores/MemberStore');

var MemberList = React.createClass({
    getInitialState : function() {
        return({
            members : MemberStore.getMembers()
        });
    },
    
    componentDidMount : function() {
        MemberStore.addChangeListener(this._onMembersChange);
    },
    
    componentWillUnmount : function(){
        MemberStore.removeChangeListener(this._onMembersChange);
    },
    
    _onMembersChange : function() {
        this.setState({
            members : MemberStore.getMembers()
        })
    },
    
    handleToggle : function() {
        this.props.toggle();
    },
    
    objectToMember : function(object) {
        return <div key={object} className="member-node">
                    <div className="member-node-label">{object}</div>
                </div>
    },
    
    render : function(){
        var memberNodes = this.state.members.map(this.objectToMember);
        return (
            <div className="member-list">
                <div className="member-list-header">
                    <div className="member-header-label">Online</div>
                </div>
                {memberNodes}
            </div>
        )
    }
});

module.exports = MemberList;