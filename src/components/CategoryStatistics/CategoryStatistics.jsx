import "./CategoryStatistics.scss";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import CategoryStatisticsDiagram from "../CategoryStatisticsDiagram/CategoryStatisticsDiagram";
import CategoryStatisticsCard from "../CategoryStatisticsCard/CategoryStatisticsCard";
import transactions from "../../data/transactions";
import { upperFirst, sum, max } from "lodash";
import { transactionTypes, transactionsColor } from "../../data/transactions";
import moment from "moment";
import intervalVariants from "../../constans/filterValues";

function CategoryStatistics({ selectedFilter, selectedBankAcc }) {
  const [currentTab, setCurrentTab] = useState(0);

  const onTabSelect = (_, tabIndex) => {
    setCurrentTab(tabIndex);
  };

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

  const getFillPercentage = (categoryName) => {
    const maxSum = max(Object.values(categorySums));
    return (categorySums[categoryName.toLowerCase()] / maxSum) * 100;
  };

  // Convert the object to an array
  const diagramData = Object.keys(categorySums).map((category) => {
    return {
      id: upperFirst(category),
      label: upperFirst(category),
      value: categorySums[category],
      color: transactionsColor[category],
    };
  });

  return (
    <div className="category-statistics">
      <Tabs value={currentTab} onChange={onTabSelect}>
        <Tab label="Outcome" />
        <Tab label="Income" />
      </Tabs>
      <div className="category-statistics__category-outcome">
        <div className="category-statistics__category-list">
          {diagramData
            .sort((a, b) => b.value - a.value)
            .map((category) => {
              return (
                <CategoryStatisticsCard
                  fillPercantage={getFillPercentage(category.label)}
                  category={upperFirst(category.label)}
                  transactionColor={transactionsColor[category.label.toLowerCase()]}
                  sum={category.value}
                />
              );
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
