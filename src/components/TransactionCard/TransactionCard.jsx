import "./TransactionCard.scss";
import { Grid, Box, Chip } from "@mui/material";

function TransactionCard() {
  return (
    <div className="transaction-card">
      <div className="transaction-card__row">
        <div className="transaction-card__title">Food</div>
        <div className="transaction-card__price">
          <Chip label="-120$" color="primary" />
        </div>
      </div>
      <div className="transaction-card__row">
        <div className="transaction-card__comment">Comment very very very laaaaarge</div>
        <div className="transaction-card__date">14/07/2022</div>
      </div>
    </div>
  );
}

export default TransactionCard;
