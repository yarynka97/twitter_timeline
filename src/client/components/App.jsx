import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import Timeline from './Timeline';
const config = require('../config');

class App extends Component {
    state = {
        tweets: [],
        class: '',
        buttonDisabled: false
    }

    render() {
        return (
            <div className="app">
                <div className="input">
                    <div className="logo">
                        <img src={config.logo} />
                    </div>
                    <h1>Welcome to <br />Twitter timeline</h1>
                    <p>Enter users screen name</p>
                    <span className="tip"><b>Note</b>, if user is private, you can't get his tweets in this app</span>
                    <input id="input" type="text" onKeyPress={this.handleEnter} required className="" placeholder="Enter screen name, please" />
                    <button disabled={this.state.buttonDisabled} className="btn btn-lg" onClick={this.findTweets}>Show</button>
                </div>
                <Timeline
                    tweets={this.state.tweets}
                    className={this.state.class}
                />
            </div>
        )
    }

    handleEnter = (event) => {
        if (event.charCode === 13 && !this.state.buttonDisabled)
            this.findTweets();
    }

    findTweets = () => {
        this.setState({
            buttonDisabled: true
        });
        var userName = document.getElementById("input").value;
        if (userName === '') {
            this.mistakeMessage('Enter users screen name, please');
            this.setState({
                buttonDisabled: false
            });
        } else {                
            axios.get(config.serverUrl, {
                params: {
                    user_name: userName
                }
            }).then(res => {
                if (res.data[0].statusCode === 200) {
                    this.setState({
                        tweets: res.data,
                        class: 'twit card-body'
                    });
                } else {
                    this.mistakeMessage(res.data[0].message);
                }
                this.setState({
                    buttonDisabled: false
                });
            }).catch(err => {
                this.mistakeMessage(err.message);
            });
        }
    }

    mistakeMessage = (message) => {
        this.setState({
            tweets: [{
                id: 1,
                date: '',
                screenName:'Error',
                text: message,
                imgUrl: [config.mistakeImg]
            }],
            class: 'mistake card-body'
        });
    }
}

export default App;