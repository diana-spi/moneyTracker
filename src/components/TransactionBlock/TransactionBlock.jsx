import "./TransactionBlock.scss";
import { useState } from "react";
import transactionsData from "../../data/transactions";
import TransactionCard from "../TransactionCard/TransactionCard";
import { Button } from "@mui/material";
import { KeyboardArrowUp as KeyboardArrowUpIcon, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import Moment from "moment";

function TransactionBlock() {
  const [showTransactions, setShowTransactions] = useState(7);

  return (
    <>
      <div className="transaction-block">
        <div className="transaction-block__cards-list">
          {transactionsData
            .sort((a, b) => new Moment(b.date) - new Moment(a.date))
            .slice(0, showTransactions)
            .map((transaction) => (
              <TransactionCard
                key={Math.random()}
                type={transaction.type}
                category={transaction.category}
                sum={transaction.sum}
                date={transaction.date}
                comment={transaction.comment}
                bank={transaction.account}
              />
            ))}
        </div>

        {transactionsData.length > showTransactions && (
          <Button
            className="transaction-block__btn-more"
            variant="text"
            size="small"
            onClick={() => setShowTransactions(showTransactions + 7)}
          >
            Show more <ExpandMoreIcon />
          </Button>
        )}
      </div>
      {/* <Button className="transaction-block__btn-up" onClick={
        
      }>
        <KeyboardArrowUpIcon />
      </Button> */}
    </>
  );
}

export default TransactionBlock;
