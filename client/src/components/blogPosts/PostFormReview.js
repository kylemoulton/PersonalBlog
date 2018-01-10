import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const PostFormReview = ({ onCancel, formValues, createPost, history}) => {
    const handleSubmitPost = () => {
        createPost(formValues);
        history.push('/blog');
    } 

    return (
        <div>
            <h5>Confirm your Blog Post</h5>
            <div>
                <label>Title</label>
                <div>
                    {formValues.title}
                </div>
            </div>
            <div>
                <label>Content</label>
                <div>
                    {formValues.content}
                </div>
            </div>
            <button
                className="yellow darken-3 white-text btn-flat"
                onClick={onCancel}
            >
                Back
            </button>
            <button
                onClick={() => handleSubmitPost()}
                className="green white-text btn-flat right"
            >
                Submit Blog Post
            </button>
        </div>
    );
}

function mapStateToProps(state) {
    return { formValues: state.form.postForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(PostFormReview));