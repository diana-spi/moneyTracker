import React from "react";
import { Grid } from "@mui/material/";
import ExpenceBlock from "../../components/ExpenceBlok/ExpenceBlock";
import Header from "../../components/Header/Header";
import HeaderSettings from "../../components/HeaderSettings/HeaderSettings";
import TransactionBlock from "../../components/TransactionBlock/TransactionBlock";
import "./MainPage.scss";

function MainPage() {
  return (
    <Grid className="main-page" container spacing={2}>
      <Grid item xs={8}>
        <div className="main-page__analitycs-block">
          <Header userName="Dima" />
        </div>
      </Grid>
      <Grid className="main-page__transaction-block" item xs={4}>
        <div className="main-page__transaction-wrap">
          <HeaderSettings />
          <ExpenceBlock />
          <TransactionBlock />
        </div>
      </Grid>
    </Grid>
  );
}

export default MainPage;
