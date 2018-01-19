import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ProjectForm from './ProjectForm';
import ProjectFormReview from './ProjectFormReview';

class ProjectNew extends Component {
    state = { showProjectReview: false };

    renderContent() {
        if (this.state.showProjectReview) {
            return <ProjectFormReview
                onCancel={() => this.setState({ showProjectReview: false })}
            />
        }

        return <ProjectForm onProjectSubmit={() => this.setState({ showProjectReview: true })} />
    }
    
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'projectForm'
})(ProjectNew);