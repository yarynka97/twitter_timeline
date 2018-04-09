import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Tweet extends Component {
    render() {
        return (
            <div className="card twit-post-box">
                <div className={this.props.className}>
                    <p className="card-title font-weight-bold name">{this.props.tweet.screenName}</p>
                    <span className="date card-subtitle mb-2">{this.formatDate(this.props.tweet.date)}</span>
                    <div className="text font-weight-light card-text">
                        {this.props.tweet.text}
                    </div>
                    {
                        this.props.tweet.imgUrl.map((url, index) => {
                            return (
                                <img src={url} key={index} className="image" />
                            )
                        })

                    }
                </div>
            </div>
        )
    }

    formatDate = (date) => date.slice(4, 11) + date.slice(26, 30) + ' ';
};

export default Tweet;