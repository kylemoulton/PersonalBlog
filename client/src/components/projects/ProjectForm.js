import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import InputFormField from '../common/InputFormField';
import TextAreaFormField from '../common/TextAreaFormField';

class ProjectForm extends Component {
    render() {
        return (
            <div className="container" style={{marginTop: "50px"}}>
                <form onSubmit={this.props.handleSubmit(this.props.onProjectSubmit)}>
                    <Field
                        label="Project Title"
                        name="title"
                        component={InputFormField}
                        type="text"
                    />
                    <Field
                        label="Project Description"
                        name="description"
                        component={TextAreaFormField}
                        type="text"
                    />
                    <Field
                        label="Image Url"
                        name="imageUrl"
                        component={InputFormField}
                        type="text"
                    />
                    <Field
                        label="Github Link"
                        name="githubUrl"
                        component={InputFormField}
                        type="text"
                    />
                    <Link to="/projects" className="red btn-flat left white-text">
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
    if (!values.description) {
        errors.description = "You must provide a description";
    }
    if (!values.imageUrl) {
        errors.imageUrl = "Please provide an image url";
    }
    if (!values.githubUrl) {
        errors.githubUrl = "Please provide a Github url";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'projectForm',
    destroyOnUnmount: false
})(ProjectForm);