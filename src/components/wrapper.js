/*
This is our top-level component. Sub-components matching specific routes will be
contained in `this.props.children` and rendered out.
*/

var React = require('react');

var Wrapper = React.createClass({
    render: function() {
        return (
            <div className="wrapper">
                <h2>RIA course member guild 2015</h2>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Wrapper;