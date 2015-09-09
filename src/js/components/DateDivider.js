var DateDivider = React.createClass({
    render : function () {
        var options = {month: 'long', day: 'numeric', year: 'numeric'};
        var dateString = this.props.date.toLocaleDateString(undefined, options);
        return (
            <div className="date-divider">
                <div className="divider-line"></div>
                <div className="divider-label">{dateString}</div>
            </div>
        );
    }
});

module.exports = DateDivider;