import React from "react";
import ReactDOM from "react-dom";
import "./style.sass";

const Application = () => {
    return (
        <article>Create React App</article>
    );
};

ReactDOM.render(
    <Application />,
    document.getElementById("wrapper")
);