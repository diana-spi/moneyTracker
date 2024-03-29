import { useState } from "react";
import { Grid, Tabs, Tab } from "@mui/material";
import ExpenceBlock from "../../components/ExpenceBlok/ExpenceBlock";
import Header from "../../components/Header/Header";
import HeaderSettings from "../../components/HeaderSettings/HeaderSettings";
import TransactionBlock from "../../components/TransactionBlock/TransactionBlock";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import TotalBlock from "../../components/TotalBlock/TotalBlock";
import "./MainPage.scss";
import Dashboard from "../../components/Dashboard/Dashboard";
import intervalVariants from "../../constans/filterValues";

function MainPage() {
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState({ interval: intervalVariants.MONTH, dates: null });
  const [selectedBankAcc, setSelectedBankAcc] = useState([]);
  console.log("selectedFilter", selectedFilter);

  const onTabSelect = (_, tabIndex) => {
    setCurrentTab(tabIndex);
  };

  return (
    <Grid className="main-page" container spacing={2}>
      <Grid item xs={8.5}>
        <div className="main-page__analitycs-block">
          <Header userName="Dima" />
          <FilterBlock
            onSelectFilter={(interval, dates) => setSelectedFilter({ interval, dates })}
            onSelectBankAcc={setSelectedBankAcc}
          />
          <TotalBlock selectedFilter={selectedFilter} selectedBankAcc={selectedBankAcc} />
          <Dashboard selectedFilter={selectedFilter} selectedBankAcc={selectedBankAcc} />
        </div>
      </Grid>
      <Grid className="main-page__transaction-block" item xs={3.5}>
        <div className="main-page__transaction-wrap">
          <HeaderSettings />
          <div className="main-page__tabs">
            <Tabs value={currentTab} onChange={onTabSelect}>
              <Tab label="Add expense" />
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
