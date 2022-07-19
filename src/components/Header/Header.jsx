import React from "react";
import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import "./Header.scss";

function Header({ userName }) {
  return (
    <header className="header">
      <ReactSVG className="header__logo" src="assets/logo/giraffe-logo.svg" />
      <div className="header__welcome-text">Welcome back, {userName}!</div>
    </header>
  );
}

Header.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Header;
