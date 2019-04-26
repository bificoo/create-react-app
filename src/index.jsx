import React from "react";
import ReactDOM from "react-dom";
import Header from "modules/Header";
import "./style.sass";

const Application = () => {
    return (
        <article>
            <Header />
            Hi, i am bificoo.
        </article>
    );
};

ReactDOM.render(
    <Application />,
    document.getElementById("wrapper")
);