import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostNew from './blogPosts/PostNew';

const notAuthorized = (
    <div>
        <p>You are not authorized to submit posts</p>
        <p><a href="/auth/google">Login with Google</a></p>
    </div>
);

class AdminDashboard extends Component {
    

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
                        return (
                            <div>
                                <PostNew />
                            </div>
                        );
                    }
                }
                return notAuthorized;
        }
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(AdminDashboard);