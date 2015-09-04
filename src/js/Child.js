var Child = React.createClass({
      render: function(){
        return (
          <div>
            and this is the <b>{this.props.name}</b>.
            <br/>
            This is the live-reload test + 2.
          </div>
        )
      }
});

module.exports = Child;