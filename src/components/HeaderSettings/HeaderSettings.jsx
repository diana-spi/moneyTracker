import { Settings as SettingsIcon, Logout as LogoutIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./HeaderSettings.scss";

function HeaderSettings() {
  return (
    <header className="header-set">
      <IconButton className="header-set__btn header-set__settings-btn" aria-label="settings">
        <SettingsIcon className="header-set__icon" />
      </IconButton>
      <IconButton className="header-set__btn header-set__logout-btn" aria-label="logout">
        <LogoutIcon className="header-set__icon" />
      </IconButton>
    </header>
  );
}

export default HeaderSettings;
