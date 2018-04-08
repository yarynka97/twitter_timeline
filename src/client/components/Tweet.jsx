import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Tweet extends Component {
    render() {
        return (
            <div className="card twit-margin">
                <div className={this.props.className}>
                    <p className="card-title font-weight-bold name">{this.props.twit.user.screen_name}</p>
                    <span className="date card-subtitle mb-2">{this.formatDate(this.props.twit.created_at)}</span>
                    <div className="text font-weight-light card-text">
                        {this.props.twit.text}
                    </div>
                </div>
            </div>
        )
    }

    formatDate = (date) => date.slice(4, 11) + date.slice(26, 30) + ' ';
};

export default Tweet;