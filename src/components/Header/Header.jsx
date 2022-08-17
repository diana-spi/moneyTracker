import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import "./Header.scss";
import { useTranslation } from "react-i18next";

function Header({ userName }) {
  const { t } = useTranslation();
  return (
    <header className="header">
      <ReactSVG className="header__logo" src="assets/logo/giraffe-logo.svg" />
      <div className="header__welcome-text">{t("mainPage.header.welcomeText", { userName })}</div>
    </header>
  );
}

Header.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Header;
