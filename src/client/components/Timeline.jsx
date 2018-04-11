﻿import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Tweet from './Tweet';

const config = require('../../config');

class Timeline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
            class:''
        }
    }

    render() {
        var tweets = this.state.tweets;
        return (
            <div className="timeline">
                {
                    tweets.map(tweet => {
                        return (
                            <Tweet
                                key={tweet.id}
                                tweet={tweet}
                                className={this.state.class}
                            />
                            )
                    })
                }
            </div>
            )
    }

    componentWillMount = () => {
        const way = this.props.match.params.way;
        if (way === 'tweets') {
            const userName = this.props.match.params.userName;
            if (userName) {
                axios.get(config.serverUrl, {
                    params: {
                        user_name: userName
                    }
                }).then(res => {
                    res.data.length > 0 ?
                        this.setState({
                            tweets: res.data,
                            class: 'twit card-body'
                        }) :
                        this.mistakeMessage('No tweets yet', false);
                }).catch(err => {
                    this.mistakeMessage("Username doesn't exist or user is privat");
                });
            } else {
                this.mistakeMessage("Enter username, please");
            }
        }
    }

    mistakeMessage = (message, isError = true) => {
        let imgUrl = isError ? [config.mistakeImg] : [];
        this.setState({
            tweets: [{
                id: 1,
                date: '',
                screenName: 'Ooops',
                text: message,
                imgUrl
            }],
            class: 'mistake card-body'
        });
    }
}

export default Timeline;