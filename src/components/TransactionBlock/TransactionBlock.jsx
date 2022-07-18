import "./TransactionBlock.scss";
import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import TransactionCard from "../TransactionCard/TransactionCard";

function TransactionBlock() {
  return (
    <div className="transaction-block">
      <Accordion className="transaction-block__accardion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className="transaction-block__title" variant="h6">
            Last transactions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default TransactionBlock;
