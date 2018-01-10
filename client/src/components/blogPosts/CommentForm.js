import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import CommentField from './CommentField';
import * as actions from '../../actions';

class CommentForm extends Component {
    handleCreateComment() {
        this.props.createComment(this.props.blog._id, this.props.formValues);
        this.props.onCommentSubmit();
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(() => this.handleCreateComment())}>
                <Field
                    key="username"
                    label="Username"
                    name="username"
                    component={CommentField}
                    type="text"
                />
                <Field
                    key="content"
                    label="Comment"
                    name="content"
                    component={CommentField}
                    type="text"
                />
                <button className="red darken-3 white-text btn-flat" onClick={this.props.onCancel}>
                    Cancel
                </button>
                <button style={{marginLeft: '10px'}} className="green darken-3 white-text btn-flat" type="submit">
                    Submit
                </button>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};
    if (!values.username) {
        errors.username = 'You must provide a name';
    }
    if (!values.content) {
        errors.content = 'You must provide a comment';
    }
    return errors;
}

function mapStateToProps(state) {
    return { formValues: state.form.commentForm.values };
}

export default reduxForm({
    validate,
    form: 'commentForm'
})(connect(mapStateToProps, actions)(CommentForm));