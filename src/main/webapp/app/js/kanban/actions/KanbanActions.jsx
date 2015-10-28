"use strict";

var AppDispatcher = require('../../dispatcher/AppDispatcher.jsx');
var KanbanConst = require('./KanbanConst.jsx');

var KanbanActions = {
    scale: function (scale) {
        AppDispatcher.dispatch({
            actionType: KanbanConst.SCALE,
            scale: scale
        });
    },
    changeModel: function (model) {
        AppDispatcher.dispatch({
            actionType: KanbanConst.CHANGE_MODEL,
            model: model
        });
    }


};

module.exports = KanbanActions;
