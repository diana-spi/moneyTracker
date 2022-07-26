import "./TotalBlock.scss";
import transactionsData, { transactionTypes } from "../../data/transactions";
import { Typography } from "@mui/material";
import { round } from "lodash";
import moment from "moment";
import intervalVariants from "../../constans/filterValues";

function TotalBlock({ selectedFilter, selectedBankAcc }) {
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

  return (
    <div className="total-block">
      <div className="total-block__column">
        <Typography variant="h5" className="total-block__title">
          Total
        </Typography>
        <div className="total-block__row">
          <div className="total-block__income">
            <div className="total-block__income-sum">
              {round(
                transactionsData
                  .filter(
                    (transaction) =>
                      selectedBankAcc.length === 0 ||
                      selectedBankAcc.map((account) => account.toLowerCase()).includes(transaction.account)
                  )
                  .filter(
                    (transaction) =>
                      transaction.date >= getStartedDate().toDate() && transaction.date <= moment().toDate()
                  )
                  .filter((trans) => trans.type === transactionTypes.INCOME)
                  .reduce((acc, transaction) => acc + transaction.sum, 0),
                2
              ).toFixed(2)}
              $
            </div>
            <div className="total-block__income-title">Income</div>
          </div>
          <div className="total-block__outcome">
            <div className="total-block__outcome-sum">
              -
              {round(
                transactionsData
                  .filter(
                    (transaction) =>
                      selectedBankAcc.length === 0 ||
                      selectedBankAcc.map((account) => account.toLowerCase()).includes(transaction.account)
                  )
                  .filter(
                    (transaction) =>
                      transaction.date >= getStartedDate().toDate() && transaction.date <= moment().toDate()
                  )
                  .filter((trans) => trans.type === transactionTypes.OUTCOME)
                  .reduce((acc, transaction) => acc + transaction.sum, 0),
                2
              ).toFixed(2)}
              $
            </div>
            <div className="total-block__outcome-title">Outcome</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalBlock;
