import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Timeline from './Timeline';
const config = require('../../config');

class App extends Component {
    state = {
        link: '/tweets/:'
    }

    render() {
        return (
            <Router>
            <div className="app">
                <div className="input">
                    <div className="logo">
                        <img src={config.logo} />
                    </div>
                    <h1>Welcome to <br />Twitter timeline</h1>
                    <p>Enter username</p>
                    <span className="tip"><b>Note</b>, if user is private, you can't get his tweets in this app</span>
                    <input id="input" type="text" onKeyPress={this.handleKeyPress} required className="" placeholder="Enter username, please" />
                    <button disabled={this.state.buttonDisabled} className="btn btn-lg">
                        <Link className="link" to={this.state.link}>Show</Link>
                    </button>
                </div>
                <Route path="/tweets/:userName" component={Timeline} />
            </div>
            </Router>
        )
    }

    handleKeyPress = (event) => {
        var userName = document.getElementById("input").value;
        userName === '' ?
            this.setState({ link: '/tweets/:' }) :
            this.setState({ link: '/tweets/' + userName });

    }

}

export default App;