import "./TotalBlock.scss";
import transactionsData, { transactionTypes } from "../../data/transactions";
import { Typography } from "@mui/material";
import { round, sum } from "lodash";
import moment from "moment";
import intervalVariants from "../../constans/filterValues";
import { useState, useEffect } from "react";

function TotalBlock({ selectedFilter, selectedBankAcc }) {
  const [animatedIncomeSum, setAnimatedIncomeSum] = useState(0);
  const [animatedOutcomeSum, setAnimatedOutcomeSum] = useState(0);

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

  const calcSum = (trType) => {
    return round(
      transactionsData
        .filter(
          (transaction) =>
            selectedBankAcc.length === 0 ||
            selectedBankAcc.map((account) => account.toLowerCase()).includes(transaction.account)
        )
        .filter((transaction) => transaction.date >= getStartedDate().toDate() && transaction.date <= moment().toDate())
        .filter((trans) => trans.type === trType)
        .reduce((acc, transaction) => acc + transaction.sum, 0),
      2
    );
  };
  const totalIncome = calcSum(transactionTypes.INCOME);
  const totalOutcome = calcSum(transactionTypes.OUTCOME);

  useEffect(() => {
    setAnimatedIncomeSum(0);
    let currentValue = 0;
    const step = totalIncome / 50;
    const sumInterval = setInterval(() => {
      if (currentValue + step >= totalIncome) {
        setAnimatedIncomeSum(totalIncome);
        return clearInterval(sumInterval);
      }
      currentValue += step;
      setAnimatedIncomeSum(currentValue);
    }, 2);
  }, [totalIncome]);

  useEffect(() => {
    setAnimatedOutcomeSum(0);
    let currentValue = 0;
    const step = totalOutcome / 50;
    const sumInterval = setInterval(() => {
      if (currentValue + step >= totalOutcome) {
        setAnimatedOutcomeSum(totalOutcome);
        return clearInterval(sumInterval);
      }
      currentValue += step;
      setAnimatedOutcomeSum(currentValue);
    }, 2);
  }, [totalOutcome]);

  return (
    <div className="total-block">
      <div className="total-block__column">
        <Typography variant="h5" className="total-block__title">
          Total
        </Typography>
        <div className="total-block__row">
          <div className="total-block__income">
            <div className="total-block__income-sum">{animatedIncomeSum.toFixed(2)}$</div>
            <div className="total-block__income-title">Income</div>
          </div>
          <div className="total-block__outcome">
            <div className="total-block__outcome-sum">
              {animatedOutcomeSum > 0 ? "-" : ""}
              {animatedOutcomeSum.toFixed(2)}$
            </div>
            <div className="total-block__outcome-title">Outcome</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalBlock;
