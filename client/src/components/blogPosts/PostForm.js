import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import InputFormField from '../common/InputFormField';
import TextAreaFormField from '../common/TextAreaFormField';

class PostForm extends Component {
    render() {
        return (
            <div className="container" style={{marginTop: "50px"}}>
                <form onSubmit={this.props.handleSubmit(this.props.onPostSubmit)}>
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
        errors.title = "You must provide a title";       
    } 
    if (!values.content) {
        errors.content = "You must provide some content";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'postForm',
    destroyOnUnmount: false
})(PostForm);