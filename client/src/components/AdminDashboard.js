import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminDashboard extends Component {
    render() {
        return (
            <div className="container" style={{textAlign: "center", marginTop: "50px"}}>
                <div className="row">
                    <div className="col m4 offset-m1 s4 offset-s1">
                        <Link to="/blog/new" className="blue white-text btn-flat">
                            Create Blog Post
                        </Link>
                    </div>
                    <div className="col m4 offset-m2 s4 offset-s2">
                        <Link to="projects/new" className="blue white-text btn-flat">
                            Create Project
                        </Link>
                    </div>
                </div> 
            </div>
        );
    }
}

export default AdminDashboard;