import "./CategoryStatistics.scss";
import { Tabs, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import CategoryStatisticsDiagram from "../CategoryStatisticsDiagram/CategoryStatisticsDiagram";
import CategoryStatisticsCard from "../CategoryStatisticsCard/CategoryStatisticsCard";
import transactions from "../../data/transactions";
import getRandomNumber from "../../helpers/getRandomNumber";
import { upperFirst, sum } from "lodash";
import { transactionTypes } from "../../data/transactions";
import moment from "moment";
import intervalVariants from "../../constans/filterValues";

function CategoryStatistics({ selectedFilter, selectedBankAcc }) {
  const [currentTab, setCurrentTab] = useState(0);

  const onTabSelect = (_, tabIndex) => {
    setCurrentTab(tabIndex);
  };

  const diagramColors = [
    "#f94144",
    "#f65738",
    "#f36b2c",
    "#f88a1e",
    "#f5ae5c",
    "#f2d29a",
    "#95b66d",
    "#387047",
    "#347481",
    "#74c8da",
  ];
  const getStartedDate = () => {
    let firstDate = moment();

    switch (selectedFilter) {
      case intervalVariants.DAY:
        firstDate.hour(0).minute(0).second(0);
        break;
      case intervalVariants.WEEK:
        firstDate.day(1).hour(0).minute(0).second(0);
        break;
      case intervalVariants.MONTH:
        firstDate.date(1).hour(0).minute(0).second(0);
        break;
      case intervalVariants.YEAR:
        firstDate.month(0).date(1).hour(0).minute(0).second(0);
        break;
      default:
    }

    return firstDate;
  };
  const categorySums = transactions
    .filter(
      (transaction) => transaction.type === (currentTab === 0 ? transactionTypes.OUTCOME : transactionTypes.INCOME)
    )
    .filter(
      (transaction) =>
        selectedBankAcc.length === 0 ||
        selectedBankAcc.map((account) => account.toLowerCase()).includes(transaction.account)
    )
    .filter((transaction) => transaction.date >= getStartedDate().toDate() && transaction.date <= moment().toDate())
    // Get the category and sum of the transaction
    .reduce((acc, transaction) => {
      if (!acc[transaction.category]) {
        acc[transaction.category] = transaction.sum;
      } else {
        acc[transaction.category] += transaction.sum;
      }
      return acc;
    }, {});

  const categoriesTotal = sum(Object.values(categorySums));

  // Convert the object to an array
  const diagramData = Object.keys(categorySums).map((category) => {
    return {
      id: upperFirst(category),
      label: upperFirst(category),
      value: categorySums[category],
      color: diagramColors[getRandomNumber(0, diagramColors.length - 1)],
    };
  });

  return (
    <div className="category-statistics">
      <Typography className="category-statistics__title" variant="h5" gutterBottom component="div">
        Dashboard
      </Typography>
      <Tabs value={currentTab} onChange={onTabSelect}>
        <Tab label="Outcome" />
        <Tab label="Income" />
      </Tabs>
      <div className="category-statistics__category-outcome">
        <div className="category-statistics__category-list">
          {diagramData
            .sort((a, b) => b.value - a.value)
            .map((category) => {
              return <CategoryStatisticsCard category={upperFirst(category.label)} sum={category.value} />;
            })}
        </div>
        <div className="category-statistics__category-diagram">
          <CategoryStatisticsDiagram data={diagramData} totalSum={categoriesTotal} />
        </div>
      </div>
    </div>
  );
}

export default CategoryStatistics;
