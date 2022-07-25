import "./Dashboard.scss";
import React, { useState } from "react";
import CategoryStatistics from "../CategoryStatistics/CategoryStatistics";
import IncomeOutcomeStatistics from "../IncomeOutcomeStatistics/IncomeOutcomeStatistics";

function Dashboard({ selectedFilter, selectedBankAcc }) {
  return (
    <div className="dashboard">
      <CategoryStatistics selectedFilter={selectedFilter} selectedBankAcc={selectedBankAcc} />
      <IncomeOutcomeStatistics selectedFilter={selectedFilter} selectedBankAcc={selectedBankAcc} />
    </div>
  );
}

export default Dashboard;
