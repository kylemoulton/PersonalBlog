import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import BlogComments from './BlogComments';

class BlogPostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            showComments: false,
            cardStyle: {
                opacity: 1,
                margin: '0px 10px 0px 10px'
            }
        };
    }

    handleDelete() {
        this.props.deletePost(this.props.blog._id);
        this.setState({
            cardStyle: {
                opacity: 0.5 
            }
        });
    }
            
    handleExpand() {
        this.setState({expanded: !this.state.expanded});
    }

    handleShowComments() {
        this.setState({showComments: !this.state.showComments});
    }

    renderDeleteButton() {
        return (
            <div style={{textAlign: 'right'}} className="card-action">
                <button onClick={() => this.handleDelete()} className="red darken-3 white-text btn-flat">
                    Delete Post
                </button>
            </div>
        );
    }

    render() {
        const { blog, auth } = this.props;
        let blogContent = this.state.expanded ? blog.content : blog.content.substring(0, Math.min(blog.content.length / 2, 10)) + '...';
        let showContentMessage = this.state.expanded ? 'Show Less' : 'Show More';
        let showCommentMessage = this.state.showComments ? 'Hide Comments' : 'Show Comments';
        return (
            <div className="row" style={this.state.cardStyle}>
                <div className="col s12 m12">
                    <div className="card cyan darken-3 white-text">
                        <div className="card-content">
                            <Link
                                to={'/blog/' + blog._id}
                            >
                            <span className="card-title white-text">{blog.title}</span>
                            </Link>
                            <p>{blogContent}</p>
                        </div>
                        <div className="card-action">
                            <a className="amber-text text-darken-2" onClick={() => this.handleExpand()}>{showContentMessage}</a>
                            <a className="amber-text text-darken-2" onClick={() => this.handleShowComments()}>{showCommentMessage}: {blog.comments.length}</a>                        
                            <span className="right">Posted: {new Date(blog.date).toLocaleDateString()}</span>
                        </div>
                        {this.state.showComments ? <BlogComments blog={this.props.blog} /> : null}
                        {(auth && auth.access === 'admin') ? this.renderDeleteButton() : null}
                    </div>
                </div>
            </div>
        );    
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions)(BlogPostCard);