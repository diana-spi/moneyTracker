import "./TransactionBlock.scss";
import transactionsData from "../../data/transactions";
import TransactionCard from "../TransactionCard/TransactionCard";
import Moment from "moment";

function TransactionBlock() {
  return (
    <div className="transaction-block">
      <div className="transaction-block__cards-list">
        {transactionsData
          .sort((a, b) => new Moment(b.date) - new Moment(a.date))
          .map((transaction) => (
            <TransactionCard
              key={Math.random()}
              type={transaction.type}
              category={transaction.category}
              sum={transaction.sum}
              date={transaction.date}
              comment={transaction.comment}
            />
          ))}
      </div>
    </div>
  );
}

export default TransactionBlock;
