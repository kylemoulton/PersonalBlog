import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Blog from './Blog';
import AboutMe from './AboutMe';
import Projects from './Projects';
// Rename admindashboard and make a real dashboard? with add new post project links/buttons
import AdminDashboard from './AdminDashboard';
import EditBlogPost from './blogPosts/EditBlogPost';
import ProjectNew from './projects/ProjectNew';
import EditProject from './projects/EditProject';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route path="/about" component={AboutMe} />
                        <Route exact path="/blog" component={Blog} />
                        <Route path="/admin" component={AdminDashboard} />
                        <Route path="/blog/:id/edit" component={EditBlogPost} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/projectForm" component={ProjectNew} />
                        <Route path="/projects/:id/edit" component={EditProject} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);