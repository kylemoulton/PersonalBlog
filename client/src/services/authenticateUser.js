import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const notAuthorized = (
    <div>
        <p>You or not authorized to do this</p>
        <p><a href="/auth/google">Login with Google</a></p>
    </div>
);

const notLoggedIn = (
    <div>
        <p>You or not logged in</p>
        <p><a href="/auth/google">Login with Google</a></p>
    </div>
);

export default function authenticateUser(Component) {
    class AuthenticateComponent extends React.Component {
        render() {
            switch(this.props.auth) {    
                case null:
                    return (
                        <div>Loading</div>
                    );
                case false:
                    return notLoggedIn;
                default:
                    if (this.props.auth.access) {
                        if (this.props.auth.access === 'admin') {
                            return <Component { ...this.props } />;
                        }
                    }
                    return notAuthorized;
            }
        }
    }

    function mapStateToProps({ auth }) {
        return { auth };
    }

    return connect(mapStateToProps)(withRouter(AuthenticateComponent));
}

