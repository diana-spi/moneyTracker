import React from "react";
import PropTypes from "prop-types";
import { Settings as SettingsIcon, Logout as LogoutIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./Header.scss";

function Header({ userName }) {
  return (
    <header className="header">
      <img className="header__logo" src="/assets/logo/logo_large.svg" />
      <div className="header__welcome-text">Welcome back, {userName}!</div>
    </header>
  );
}

Header.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Header;
