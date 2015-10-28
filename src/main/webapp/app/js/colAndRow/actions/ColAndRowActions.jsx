"use strict";

var AppDispatcher = require('../../dispatcher/AppDispatcher.jsx');
var ColAndRowConst = require('./ColAndRowConst.jsx');

var ColAndRowActions = {

    changeTitle: function (nodeId, title, type) {
        AppDispatcher.dispatch({
            actionType: ColAndRowConst.CHANGE_TITLE,
            nodeId: nodeId,
            title: title,
            type: type
        });
    }

};

module.exports = ColAndRowActions;
