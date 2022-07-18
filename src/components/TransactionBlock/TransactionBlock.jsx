import "./TransactionBlock.scss";
import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import TransactionCard from "../TransactionCard/TransactionCard";

function TransactionBlock() {
  return (
    <div className="transaction-block">
      <div className="transaction-block__cards-list">
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </div>
    </div>
  );
}

export default TransactionBlock;
