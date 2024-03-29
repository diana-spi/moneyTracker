import "./TransactionCard.scss";
import { Chip } from "@mui/material";
import { transactionTypes } from "../../data/transactions";
import moment from "moment";
import { upperFirst, round } from "lodash";

function TransactionCard({ type, category, sum, date, comment, bank }) {
  return (
    <div className="transaction-card">
      <div className="transaction-card__row">
        <div className="transaction-card__left-part">
          <div className="transaction-card__title">{upperFirst(category)}</div>
          <Chip className="transaction-card__bank-acc" label={upperFirst(bank)} variant="outlined" size="small" />
        </div>
        <div className={`transaction-card__price--${type === transactionTypes.OUTCOME ? "outcome" : "income"}`}>
          <Chip label={`${type === transactionTypes.OUTCOME ? "-" : ""}${round(sum).toFixed(2)}$`} />
        </div>
      </div>
      <div className="transaction-card__row">
        <div className="transaction-card__comment">{comment}</div>
        <div className="transaction-card__date">{moment(date).format("DD.MM.YYYY")}</div>
      </div>
    </div>
  );
}

export default TransactionCard;
