import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostNew from './blogPosts/PostNew';

class AdminDashboard extends Component {
    render() {
        return <div>Admin Dashboard</div>;
    }
}

function mapStateToProps({ auth }) {
    return null;
}

export default connect(mapStateToProps)(AdminDashboard);