import { Settings as SettingsIcon, Logout as LogoutIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./HeaderSettings.scss";

function HeaderSettings() {
  return (
    <header className="header-set">
      <NavLink to="/settings" className="header-set__link">
        <IconButton className="header-set__btn header-set__settings-btn" aria-label="settings">
          <SettingsIcon className="header-set__icon" />
        </IconButton>
      </NavLink>
      <IconButton className="header-set__btn header-set__logout-btn" aria-label="logout">
        <LogoutIcon className="header-set__icon" />
      </IconButton>
    </header>
  );
}

export default HeaderSettings;
