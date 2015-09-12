var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action) {
    console.log(action.type);
    this.dispatch(action);
};

module.exports = AppDispatcher;