import React from "react";
import ReactDOM from "react-dom";

var HelloWorld = React.createClass({
    render: function () {
        return(
            <p>Hello, {this.props.greetTarget}!</p>
        );
    }
});

ReactDOM.render(
    <div>
        <HelloWorld greetTarget="jks"/>
        <HelloWorld greetTarget="jmj"/>
        <HelloWorld greetTarget="psy"/>
        <HelloWorld greetTarget="kmj"/>
        <HelloWorld greetTarget="khs"/>
    </div>,
    document.querySelector("#container")
);