import "./TotalBlock.scss";
import transactionsData, { transactionTypes } from "../../data/transactions";
import { Typography } from "@mui/material";

function TotalBlock(incomeSum, outcomeSum) {
  return (
    <div className="total-block">
      <div className="total-block__column">
        <Typography variant="h5" className="total-block__title">
          Total
        </Typography>
        <div className="total-block__row">
          <div className="total-block__income">
            <div className="total-block__income-sum">
              {transactionsData
                .filter((trans) => trans.type === transactionTypes.INCOME)
                .reduce((acc, transaction) => acc + transaction.sum, 0)}
              $
            </div>
            <div className="total-block__income-title">Income</div>
          </div>
          <div className="total-block__outcome">
            <div className="total-block__outcome-sum">
              {" "}
              {
                -transactionsData
                  .filter((trans) => trans.type === transactionTypes.OUTCOME)
                  .reduce((acc, transaction) => acc + transaction.sum, 0)
              }
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
