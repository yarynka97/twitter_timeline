import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import Timeline from './Timeline';
import config from '../../../etc/config';

class App extends Component {
    state = {
        twits: [],
        class: ''
    }

    render() {
        return (
            <div className="app card border-info mb-3">
                <div className="card-header">
                    <input id="input" type="text" required className="form-control form-control-sm" placeholder="Enter username, please" />
                    <button className="btn btn-primary btn-sm" onClick={this.findTwits}>Show</button>
                </div>
                <Timeline
                    twits={this.state.twits}
                    className={this.state.class}
                />
            </div>
        )
    }

    findTwits = () => {
        var userName = document.getElementById("input").value;
        if (userName === '') {
            this.mistakeMessage('Enter username, please');
        } else {
            var tempUrl = 'https://timeline-for-tweets.herokuapp.com/twits'
            axios.get(tempUrl, {
                params: {
                    user_name: userName
                }
            }).then(res => {
                if (res.data[0].user.screen_name === userName) {
                    this.setState({
                        twits: res.data,
                        class: 'twit card-body'
                    });
                }
                }).catch(err => {
                    this.mistakeMessage("This username doesn't exist. Please, enter real username");
            });
        }
    }

    mistakeMessage = (message) => {
        var date = new Date();
        this.setState({
            twits: [{
                id: 1,
                created_at: date.toString(),
                user: {
                    screen_name:'Some mistake',
                    location: 'here'
                },
                text: message
            }],
            class: 'mistake card-body'
        });
    }
}

export default App;