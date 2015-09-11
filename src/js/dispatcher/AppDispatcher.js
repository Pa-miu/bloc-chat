var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action) {
    console.log(action.actionType);
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
};

AppDispatcher.handleServerAction = function(action) {
    console.log(action.actionType);
    this.dispatch({
        source: 'SERVER_ACTION',
        action: action
    });
};

module.exports = AppDispatcher;