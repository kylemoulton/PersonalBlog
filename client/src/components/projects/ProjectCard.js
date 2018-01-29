import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProject } from '../../actions';

class ProjectCard extends Component {            
    state = {
        cardStyle: {
            opacity: 1.0,
            margin: '0px 10px 0px 10px'
        }
    }

    handleDelete() {
        this.props.deleteProject(this.props.project._id);
        this.setState({
            cardStyle: {
                opacity: 0.5,
                margin: '0px 10px 0px 10px',
            }
        });
    }
    
    renderAdminButtons() {
        return (
            <div style={{textAlign: 'right'}} className="card-action">
                <Link  
                    to={'/projects/' + this.props.project._id + '/edit'}
                    className="orange darken-2 white-text btn-flat"
                >
                    Edit Project
                </Link>
                <button style={{marginLeft: '15px'}} onClick={() => this.handleDelete()} className="red darken-3 white-text btn-flat">
                    Delete Project
                </button>
            </div>
        );
    }

    render() {
        return (
            <div className="row" style={this.state.cardStyle}>
                <div className="col s12 m12">
                    <div className="card cyan darken-3 white-text">
                        <div className="row">
                            <div className="col s6 m6">
                                <div className="card-content">
                                    <span className="card-title white-text">{this.props.project.title}</span>
                                </div>
                                <div className="card-content">
                                    <p>{this.props.project.description}</p>
                                </div>
                                <div className="card-action">
                                    <a href={this.props.project.githubUrl} className="amber-text text-darken-2">View on Github</a>
                                </div>
                            </div>
                            <div className="col s6 m6">
                                <a href={this.props.project.imageUrl}>
                                    <img style={{padding: '25px'}} className="responsive-img" src={this.props.project.imageUrl} />
                                </a>
                            </div>
                        </div>
                        {(this.props.auth && this.props.auth.access === 'admin') ? this.renderAdminButtons() : null}
                    </div>
                </div>
            </div>
        );    
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { deleteProject })(ProjectCard);