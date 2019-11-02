import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import config  from "../helpers/config";

export default class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  render() {
    const { authenticated } = this.props;
    console.log(authenticated);
    return (
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        {authenticated ? (
          <li onClick={this._handleLogoutClick}>Logout</li>
        ) : (
          <li onClick={this._handleSignInClick}>Login with Facebook</li>
        )}
      </ul>
    );
  }

  _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    // Upon successful login, a cookie session will be stored in the client
    window.open(config.loginUrl, "_self");
  };

  _handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage
    window.open(config.logOutUrl, "_self");
    this.props._handleNotAuthenticated();
  };

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });

  };
}