import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { fetchPost, updatePost } from '../../actions';
import InputFormField from '../common/InputFormField';
import TextAreaFormField from '../common/TextAreaFormField';

class PostEditForm extends Component {
    async componentDidMount() {
        await this.props.fetchPost(this.props.match.params.id);

        if (this.props.blogPost) {
            this.props.change('title', this.props.blogPost.title);
            this.props.change('content', this.props.blogPost.content);
        }
    }

    onUpdateSubmit() {
        this.props.updatePost(this.props.blogPost._id, this.props.formValues);
        this.props.history.push('/blog');
    }

    render() {
        return (
            <div className="container" style={{marginTop: "30px"}}>
                <form onSubmit={this.props.handleSubmit(() => this.onUpdateSubmit())}>
                    <Field
                        label="Blog Title"
                        name="title"
                        component={InputFormField}
                        type="text"
                    />
                    <Field
                        label="Blog Content"
                        name="content"
                        component={TextAreaFormField}
                        type="text"
                    />
                    <Link to="/blog" className="red btn-flat left white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                    </button>
                </form>
            </div>
        );
    }

}

function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = 'You must provide a title';
    }
    if (!values.content) {
        errors.content = 'You must provide some content';
    }
    return errors;
}

function mapStateToProps(state) {
    return {
        blogPost: state.blogPost,
        formValues: state.form.updateForm.values
    };
}

export default reduxForm({
        validate,
        form: 'updateForm'
})(connect(mapStateToProps, { fetchPost, updatePost })(PostEditForm));

