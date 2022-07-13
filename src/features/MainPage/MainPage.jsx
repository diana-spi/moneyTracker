import React from "react";
import Header from "../../components/Header/Header";
import HeaderSettings from "../../components/HeaderSettings/HeaderSettings";
import "./MainPage.scss";

function MainPage() {
  return (
    <div className="main-page">
      <div className="main-page__analitycs-block">
        <Header userName="Dima" />
      </div>
      <div className="main-page__transactions-block">
        <HeaderSettings />
      </div>
    </div>
  );
}

export default MainPage;
