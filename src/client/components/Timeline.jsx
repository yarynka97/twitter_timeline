import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet';

class Timeline extends Component {
    render() {
        let twits = this.props.twits;
        return (
            <div className="timeline">
                {
                    twits.map(twit => {
                        return (
                            <Tweet
                                key={twit.id}
                                twit={twit}
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