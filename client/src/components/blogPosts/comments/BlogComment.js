import React, { Component } from 'react';
import * as actions from '../../../actions';
import { connect } from 'react-redux';

class BlogComment extends Component {
    state = {
        commentStyle: {
            opacity: 1.0
        }

    };

    handleDeleteComment() {
        this.props.deleteComment(this.props.blogId, this.props.comment._id);
        this.setState({
            commentStyle: {
                opacity: 0.5
            }
        });
    }

    renderDeleteButton() {
        if (this.props.auth.access === 'admin') {
            return (
                <p style={{textAlign: 'right'}}>
                    <button 
                        className="red darken-3 white-text btn-flat"
                        onClick={() => this.handleDeleteComment()}
                    >
                        Delete Comment
                    </button>
                </p>
            );
        }
    }

    render() {
        return (
            <div style={this.state.commentStyle} className="white-text card-action">
                <p>{this.props.comment.content}</p>
                <p style={{fontSize: '12px'}}>Posted by {this.props.comment.username} on {new Date(this.props.comment.date).toLocaleDateString()}</p>
                {this.renderDeleteButton()}
            </div>
        );
    }
}

function mapStateToProps({auth}) {
    return { auth };
}

export default connect(mapStateToProps, actions)(BlogComment);