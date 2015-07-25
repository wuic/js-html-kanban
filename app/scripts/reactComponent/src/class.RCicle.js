"use strict";

/**
 * This class builds the new Kanban.
 *
 * @author $Author$
 */
var Cicle = React.createClass({

    mixins:[Draggable],
    getInitialState: function () {
        return {}
    },

    render: function () {
        var css = {
            top: this.props.y,
            left: this.props.x
        }
        return (
            <svg onMouseDown={this.onMouseDown} style={css} onMouseUp={this.onMouseUp} width={this.props.radius * 2} height={this.props.radius * 2}>
                <circle cx={this.props.radius} cy={this.props.radius} r={this.props.radius} stroke="green" fill="yellow" />
            </svg>
            );
    }
});
