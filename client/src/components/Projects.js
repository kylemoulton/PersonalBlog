import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCard from './projects/ProjectCard';
import { fetchProjects } from '../actions';

class Projects extends Component {
    componentDidMount() {
        this.props.fetchProjects();
    }

    renderProjects() {
        if (this.props.projects) {
            return _.map(this.props.projects, project => {
                return <ProjectCard
                    key={project._id}
                    project={project}
                />;
            });
        }
        else {
            return <p>Loading...</p>;
        }
    }

    render() {
        return(
            <div style={{marginBottom: '50px'}}>
                <h1 style={{ textAlign: 'center' }}>
                    Projects
                </h1>
                {this.renderProjects()}
            </div>
        );
    }
}

function mapStateToProps({ projects }) {
    return { projects };
}

export default connect(mapStateToProps, { fetchProjects })(Projects);