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
            <div className="app">
                <input id="input" type="text required" />
                <button onClick={this.findTwits}>Show</button>
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
            var date = new Date();
            this.setState({
                twits: [{
                    id: 1,
                    date: 'now',
                    user: {
                        location: 'here'
                    },
                    text: 'Enter user_name, please'
                }],
                class: 'mistake'
            });
        } else {
            axios.get('http://localhost:8080/twits', {
                params: {
                    user_name: userName
                }
            }).then(res => {
                this.setState({
                    twits: res.data,
                    class: 'twit'
                })
            }).catch(err => {
                console.log(err);
            });
        }
    }
}

export default App;

//${config.apiPrefix}