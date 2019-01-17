import React from 'react';
import PropTypes from 'prop-types';

export class BlogPostData extends React.Component {
    render() {
        return (
            <div className="card-header">
                <h4 className="display-4">{this.props.author} wrote: </h4>
            </div>
        )
    }
}
export class BlogPostContent extends React.Component {
    render() {

        return (
            <div className="card-body" >
                <h3 className="display-2" > how did i survived {this.props.country} for two days </h3>
                {this.props.isSeen && <img src={this.props.img} className="rounded mx-auto d-block" style={{ width: "40vw", height: "20vw" }} />}
                <p className="lead" > paragraph about something</p>
            </div>
        )
    }
}
export class BlogPost extends React.Component {
    render() {
        const today = new Date();
        return (
            <div className="card" >
                {this.props.children[1]}
                {this.props.children[0]}
                <div className="card-footer">
                    <span className={this.props.applyClass}>Published on : {today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()} </span>
                </div>
            </div>
        )
    }
}

BlogPostContent.propTypes = {
    country: PropTypes.string,
    img: PropTypes.string.isReuired,
    showImage: PropTypes.bool.isReuired
}

BlogPostData.propTypes = {
    author: PropTypes.string.isReuired
}