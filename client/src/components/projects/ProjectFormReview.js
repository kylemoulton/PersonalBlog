import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProject } from '../../actions';

const ProjectFormReview = ({ onCancel, formValues, createProject, history}) => {
    const handleSubmitProject = () => {
        createProject(formValues);
        history.push('/projects');
    } 

    return (
        <div className="container">
            <h5>Confirm your Project Submission</h5>
            <div className="row">
                <div className="col s5 offset-s1 m5 offset-m1">
                    <div>
                        <label>Project Title</label>
                        <div>
                            {formValues.title}
                        </div>
                    </div>
                    <div>
                        <label>Project Description</label>
                        <div>
                            {formValues.description}
                        </div>
                    </div>
                    <div>
                        <label>Github Url</label>
                        <div>
                            {formValues.githubUrl}
                        </div>
                    </div>
                </div>
                <div className="col s5 offset-s1 m5 offset-m1">
                    <div className="row">
                        <label>Screen Shot</label>
                    </div>
                    <div className="row">
                        <img src={formValues.imageUrl} style={{maxHeight: '400px'}} />
                    </div>
                </div>
            </div>
            <div className="row">
                <button
                    className="yellow darken-3 white-text btn-flat"
                    onClick={onCancel}
                >
                    Back
                </button>
                <button
                    onClick={() => handleSubmitProject()}
                    className="green white-text btn-flat right"
                >
                    Submit Project
                </button>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { formValues: state.form.projectForm.values };
}

export default connect(mapStateToProps, { createProject })(withRouter(ProjectFormReview));