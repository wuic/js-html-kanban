"use strict";

var AppDispatcher = require('../../dispatcher/AppDispatcher.jsx');
var PreviewConst = require('./PreviewConst.jsx');

var PreviewActions = {

    openZZ: function (nodeId) {
        AppDispatcher.dispatch({
            actionType: PreviewConst.OPEN,
            nodeId: nodeId
        });
    }


};

module.exports = PreviewActions;
