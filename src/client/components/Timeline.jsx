import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet';

class Timeline extends Component {
    render() {
        let tweets = this.props.tweets;
        return (
            <div className="timeline">
                {
                    tweets.map(tweet => {
                        return (
                            <Tweet
                                key={tweet.id}
                                tweet={tweet}
                                className={this.props.className}
                            />
                            )
                    })
                }
            </div>
            )
    }
}

export default Timeline;