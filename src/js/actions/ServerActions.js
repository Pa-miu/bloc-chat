var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ServerActions = {
    roomFetched : function(json) { 
        AppDispatcher.handleAction({
            type : AppConstants.ROOMS_FETCHED,
            data : json
        });
    },
};

module.exports = ServerActions;