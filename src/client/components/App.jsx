import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import Timeline from './Timeline';
const config = require('../../config');

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
                    <p>Enter username</p>
                    <span className="tip"><b>Note</b>, if user is private, you can't get his tweets in this app</span>
                    <input id="input" type="text" onKeyPress={this.handleEnter} required className="" placeholder="Enter username, please" />
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
                res.length > 0 ?
                    this.setState({
                        tweets: res.data,
                        class: 'twit card-body',
                        buttonDisabled: false
                    }) :
                    this.mistakeMessage('No tweets yet', false);       
            }).catch(err => {
                this.mistakeMessage("Username doesn't exist or user is privat");
                this.setState({
                    buttonDisabled: false
                });
            });
        }
    }

    mistakeMessage = (message, isError=true) => {
        let imgUrl = isError ? [config.mistakeImg] : [];
        this.setState({
            tweets: [{
                id: 1,
                date: '',
                screenName:'Ooops',
                text: message,
                imgUrl
            }],
            class: 'mistake card-body'
        });
    }
}

export default App;