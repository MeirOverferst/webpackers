import React from 'react';
import propTypes from 'prop-types';

export class BlogPostData extends React.Component {
    render() {
        return (
            <div className="card-header">
                <h4 className="display-4">{this.props.childAuthor} wrote: </h4>
            </div>
        )
    }
}
export class BlogPostContent extends React.Component {
    render() {

        return (
            <div className="card-body" >
                <h3 className="display-2" > how did i survived {this.props.country} for two days </h3>
                {this.props.childShowImage && <img src={this.props.childImage} className="rounded mx-auto d-block" style={{ width: "40vw", height: "20vw" }} />}
                <p className="lead d-flex justify-content-center" >Read more about this unique experience!</p>
            </div>
        )
    }
}
export class BlogPost extends React.Component {
    render() {
        const today = new Date();
        return (
            <div className="card" >
                <BlogPostData childAuthor={this.props.parentAuthor} />
                <BlogPostContent country={this.props.parentCountry} childImage={this.props.parentImage} childShowImage={this.props.parentShowImage} />
                <div className="card-footer">
                    <span className={this.props.makeBig ? "display-1" : "display-4"}>Published on : {today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()} </span>
                </div>
            </div>
        )
    }
}

BlogPostContent.propTypes = {
    country: propTypes.string,
    img: propTypes.string.isRequired,
    showImage: propTypes.bool.isRequired
}

BlogPostData.propTypes = {
    author: propTypes.string.isRequired
}

BlogPost.propTypes = {
    makeBig: propTypes.bool.isRequired
}