import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Blog from './Blog';
import AboutMe from './AboutMe';
import Projects from './Projects';
import authenticateUser from '../services/authenticateUser';
import AdminDashboard from './AdminDashboard';
import PostNew from './blogPosts/PostNew';
import PostEditForm from './blogPosts/PostEditForm';
import ProjectNew from './projects/ProjectNew';
import ProjectEditForm from './projects/ProjectEditForm';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="container" style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
                        <Header />
                        <main style={{flex: "1 0 auto"}}>
                            <Route exact path="/" component={Landing} />
                            <Route path="/about" component={AboutMe} />
                            <Route exact path="/blog" component={Blog} />
                            <Route exact path="/projects" component={Projects} />
                            <Route path="/admin" component={authenticateUser(AdminDashboard)} />
                            <Route exact path="/blog/new" component={authenticateUser(PostNew)} />
                            <Route path="/blog/:id/edit" component={authenticateUser(PostEditForm)} />
                            <Route exact path="/projects/new" component={authenticateUser(ProjectNew)} />
                            <Route path="/projects/:id/edit" component={authenticateUser(ProjectEditForm)} />
                        </main>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);