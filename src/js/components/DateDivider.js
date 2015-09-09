var DateDivider = React.createClass({
    render : function () {
        return (
            <div className="date-divider">
                <div className="divider-line"></div>
                <div className="divider-label">{this.props.date}</div>
            </div>
        );
    }
});

module.exports = DateDivider;