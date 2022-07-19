import React, { useState } from "react";
import { Grid, Tabs, Tab } from "@mui/material";
import ExpenceBlock from "../../components/ExpenceBlok/ExpenceBlock";
import Header from "../../components/Header/Header";
import HeaderSettings from "../../components/HeaderSettings/HeaderSettings";
import TransactionBlock from "../../components/TransactionBlock/TransactionBlock";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import TotalBlock from "../../components/TotalBlock/TotalBlock";
import "./MainPage.scss";

function MainPage() {
  const [currentTab, setCurrentTab] = useState(0);

  const onTabSelect = (_, tabIndex) => {
    setCurrentTab(tabIndex);
  };

  return (
    <Grid className="main-page" container spacing={2}>
      <Grid item xs={8.5}>
        <div className="main-page__analitycs-block">
          <Header userName="Dima" />
          <FilterBlock />
          <TotalBlock />
        </div>
      </Grid>
      <Grid className="main-page__transaction-block" item xs={3.5}>
        <div className="main-page__transaction-wrap">
          <HeaderSettings />
          <div className="main-page__tabs">
            <Tabs value={currentTab} onChange={onTabSelect}>
              <Tab label="Add expence" />
              <Tab label="Last transactions" />
            </Tabs>
          </div>
          {currentTab === 0 && <ExpenceBlock />}
          {currentTab === 1 && <TransactionBlock />}
        </div>
      </Grid>
    </Grid>
  );
}

export default MainPage;
