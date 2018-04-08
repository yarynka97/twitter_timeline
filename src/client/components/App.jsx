import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import Timeline from './Timeline';

class App extends Component {
    state = {
        tweets: [],
        class: '',
        buttonDisabled: false
    }

    render() {
        return (
            <div className="app card mb-3">
                <div className="card-header">
                    <input id="input" type="text" onKeyPress={this.handleEnter} required className="form-control form-control-sm" placeholder="Enter username, please" />
                    <button disabled={this.state.buttonDisabled} className="btn btn-primary btn-sm" onClick={this.findTweets}>Show</button>
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
            this.mistakeMessage('Enter username, please');
        } else {
            var tempUrl = 'http://localhost:8080/tweets';//'https://timeline-for-tweets.herokuapp.com/tweets'
                
            axios.get(tempUrl, {
                params: {
                    user_name: userName
                }
            }).then(res => {
                if (res.data[0].screenName === userName) {
                    this.setState({
                        tweets: res.data,
                        class: 'twit card-body',
                        buttonDisabled: false
                    });
                }
            }).catch(err => {
                    this.mistakeMessage("Server Error");
                    this.setState({
                        buttonDisabled: false
                    });
            });
        }
    }

    mistakeMessage = (message) => {
        this.setState({
            tweets: [{
                id: 1,
                created_at: '',
                user: {
                    screen_name:'Some mistake'
                },
                text: message
            }],
            class: 'mistake card-body'
        });
    }
}

export default App;