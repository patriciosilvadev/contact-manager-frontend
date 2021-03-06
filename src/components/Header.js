import PropTypes from "prop-types";
import React, { Component } from "react";
import config  from "../helpers/config";

export default class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  render() {
    const { authenticated } = this.props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            Contact Manager
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="fas fa-home" />Home
                </a>
              </li>
              {authenticated ? (
                 <li className="nav-item nav-link" onClick={this._handleLogoutClick}><
                  i className="fas fa-sign-out-alt"/> Logout</li>
               ) : (
                 <li className="nav-item nav-link" onClick={this._handleSignInClick}><i
                   className="fab fa-facebook-square" /> Login with Facebook</li>
               )}
            </ul>
          </div>
        </div>
      </nav>
    );

  }

  _handleSignInClick = () => {
    console.log(config.loginUrl);
    // Authenticate using via passport api in the backend
    // Open facebook login page
    // Upon successful login, a cookie session will be stored in the client
    window.open(config.loginUrl, "_self");
  };

  _handleLogoutClick = () => {
    // Logout using facebook passport api
    // Set authenticated state to false in the HomePage
    window.open(config.logOutUrl, "_self");
    this.props._handleNotAuthenticated();
  };

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });

  };
}
