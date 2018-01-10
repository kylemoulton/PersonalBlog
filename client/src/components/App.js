import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Blog from './Blog';
import AboutMe from './AboutMe';
import Projects from './Projects';
import AdminDashboard from './AdminDashboard';
import BlogPost from './blogPosts/BlogPost';

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
                        <Route path="/blog/:id" component={BlogPost} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/admin" component={AdminDashboard} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);