import React from "react";
import logo from "./../../logo.svg";

function Intro() {
    return (
        <div>
            <h1>INTRO</h1>
            <header className="App-header">
                <h1>Contract to Chain Deployer</h1>
                <a className="App-link" href="/" rel="noopener noreferrer">
                    Home
                </a>
                <a className="App-link" href="/app" rel="noopener noreferrer">
                    App
                </a>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default Intro;
