import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Tweet extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <p className="date">{this.props.twit.created_at}</p>
                <p className="location">{this.props.twit.user.location}</p>
                <p className="name">{this.props.twit.screen_name}</p>
                <div className="text">
                    {this.props.twit.text}
                </div>
            </div>
        )
    }
};

export default Tweet;