"use strict";

/**
 * This class builds the react Application.
 *
 * @author $Author$
 */

var React = require('react');
var _ = require('lodash');

var Header = require('../../Header.react.jsx');
var Kanban = require('../../kanban/components/Kanban.react.jsx');
var OverView = require('../../overview/components/Overview.react.jsx')

var KanbanModel = require('./../../kanban/model/KanbanModelBuilder');

// Stores
var StickyStore = require('../../sticky/stores/StickyStore');

var AppStore = require('../stores/AppStore');


var App = React.createClass({

    getInitialState: function () {
        var model = {};
        model.selectedZZ = {};
        model.zzList = [];
        return model;
    },

    componentDidMount: function () {
        AppStore.addChangeListener(this.onChange);
        this.onChange();
    },

    componentWillUnmount: function () {
        AppStore.removeChangeListener();
    },

    onChange: function () {
        this.setState({zzList: AppStore.getZZList(), selectedZZ : AppStore.getSelectedZZ()});
    },

    render: function () {

        var core;
        if (this.state.selectedZZ.nodeId) {
            core = (<Kanban model={this.state.selectedZZ}></Kanban>);
        } else {
            core = (<OverView model={this.state.zzList}></OverView>);
        }

        return (
            <div>
                <Header></Header>
                {core}
            </div>
            );
    }
});

module.exports = App;

