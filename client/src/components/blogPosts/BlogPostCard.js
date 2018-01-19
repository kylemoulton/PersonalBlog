import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import BlogComments from './comments/BlogComments';

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
                opacity: 0.5,
                margin: '0px 10px 0px 10px'
            }
        });
    }
            
    handleExpand() {
        this.setState({expanded: !this.state.expanded});
    }

    handleShowComments() {
        this.setState({showComments: !this.state.showComments});
    }

    renderAdminButtons() {
        return (
            <div style={{textAlign: 'right'}} className="card-action">
                <Link  
                    to={'/blog/' + this.props.blog._id + '/edit'}
                    className="orange darken-2 white-text btn-flat"
                >
                    Edit Post
                </Link>
                <button style={{marginLeft: '10px'}} onClick={() => this.handleDelete()} className="red darken-3 white-text btn-flat">
                    Delete Post
                </button>
            </div>
        );
    }

    render() {
        const { blog, auth } = this.props;
        let blogContent = this.state.expanded ? blog.content : blog.content.substring(0, Math.min(blog.content.length / 2, 175)) + '...';
        let showContentMessage = this.state.expanded ? 'Show Less' : 'Show More';
        let showCommentMessage = this.state.showComments ? 'Hide Comments' : 'Show Comments';
        return (
            <div className="row" style={this.state.cardStyle}>
                <div className="col s12 m12">
                    <div className="card cyan darken-3 white-text">
                        <div className="card-content">
                            <span className="card-title white-text">{blog.title}</span>
                            <p>{blogContent}</p>
                        </div>
                        <div className="card-action" style={{paddingBottom: '20px'}}>
                            <a className="amber-text text-darken-2" onClick={() => this.handleExpand()}>{showContentMessage}</a>
                            <a className="amber-text text-darken-2" onClick={() => this.handleShowComments()}>{showCommentMessage}: {blog.comments.length}</a>                        
                            <span style={{marginLeft: '15px'}} className="right">Posted: {new Date(blog.date).toLocaleDateString()}</span>
                            {blog.lastUpdated ? <span className="right grey-text text-lighten-1">Last Edited: {new Date(blog.lastUpdated).toLocaleDateString()}</span> : null}
                        </div>
                        {this.state.showComments ? <BlogComments blog={this.props.blog} /> : null}
                        {(auth && auth.access === 'admin') ? this.renderAdminButtons() : null}
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