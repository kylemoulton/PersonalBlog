import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { fetchProject, updateProject } from '../../actions';
import InputFormField from '../common/InputFormField';
import TextAreaFormField from '../common/TextAreaFormField';

const notAuthorized = (
    <div>
        <p>You are not authorized to edit this project</p>
        <p><a href="/auth/google">Login with Google</a></p>
    </div>
);

class EditBlogPost extends Component {
    async componentDidMount() {
        await this.props.fetchProject(this.props.match.params.id);

        if (this.props.project) {
            this.props.change('title', this.props.project.title);
            this.props.change('description', this.props.project.description);
            this.props.change('imageUrl', this.props.project.imageUrl);
            this.props.change('githubUrl', this.props.project.githubUrl);
        }
    }

    onUpdateSubmit() {
        this.props.updateProject(this.props.project._id, this.props.formValues);
        this.props.history.push('/projects');
    }

    renderEditProjectForm() {
        return (
            <div className="container" style={{marginTop: "30px", marginBottom: '100px'}}>
                <form onSubmit={this.props.handleSubmit(() => this.onUpdateSubmit())}>
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

    render() {
        switch(this.props.auth) {    
            case null:
                return (
                    <div>Loading</div>
                );
            case false:
                return notAuthorized;
            default:
                if (this.props.auth.access) {
                    if (this.props.auth.access === 'admin') {
                        return this.renderEditProjectForm();
                    }
                }
                return notAuthorized;
        }
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

function mapStateToProps(state) {
    return {
        auth: state.auth,
        project: state.project,
        formValues: state.form.updateForm.values
    };
}

export default reduxForm({
        validate,
        form: 'updateForm'
})(connect(mapStateToProps, { fetchProject, updateProject })(EditBlogPost));

