import React, { Component } from 'react';
import BlogComment from './BlogComment';
import CommentForm from './CommentForm';
import _ from 'lodash';

class BlogComments extends Component {
    state = {
        showAddComment: true,
        showCommentForm: false
    };

    renderComments() {
        return _.map(this.props.blog.comments, comment => {
            return <BlogComment
                key={comment._id}
                comment={comment}
                blogId={this.props.blog._id}
            />;
        });
    }

    renderCommentForm() {
        return (
            <div className="card-action">
                <CommentForm 
                    onCancel={() => this.handleAddComment()}
                    onCommentSubmit={() => this.handleAddComment()}
                    blog={this.props.blog}
                />
            </div>
        )
    }

    handleAddComment() {
        this.setState({
            showAddComment: !this.state.showAddComment,
            showCommentForm: !this.state.showCommentForm
        });
    }

    render() {
        // Change and test onClick for add comment to arrow function
        return (
            <div className="card-stacked">
                {this.props.blog.comments.length > 0 ? <div className="card-action">{this.renderComments()}</div> : null}
                {this.state.showAddComment ? <div className="card-action"><a onClick={this.handleAddComment.bind(this)}>Add Comment</a></div> : null}
                {this.state.showCommentForm ? this.renderCommentForm() : null}
            </div>
        );
    }
}

export default BlogComments;