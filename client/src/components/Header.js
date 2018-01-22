import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper cyan darken-1 white-text">
                    <Link
                        to='/'
                        className="left brand-logo"
                        style={{marginLeft: '10px'}}
                    >
                    Kyle Moulton
                    </Link>
                    <ul className="right">
                        <li>
                            <Link
                                to='/blog'
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/about'
                            >
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/projects'
                            >
                                Projects
                            </Link>
                        </li>
                        {this.props.auth && this.props.auth.access === 'admin' ? (
                            <li>
                                <Link
                                    to='/admin'
                                >
                                    Admin Dashboard
                                </Link>
                            </li>
                        ) : null }
                        {this.props.auth ? (
                            <li>
                                <a href='/api/logout'>Logout</a>
                            </li>
                        ) : null
                        }
                    </ul>
                </div>
            </nav>
        );   
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);