import "./ExpenceBlock.scss";
import { useState } from "react";
import moment from "moment";
import { transactionsCategories, transactionTypes, transactionsAccounts } from "../../data/transactions";
import { Button, FormControl, InputLabel, NativeSelect, TextField, InputAdornment, Input } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { upperFirst } from "lodash";

const initialState = {
  bankAcc: Object.values(transactionsAccounts)[0],
  transactionType: transactionTypes.OUTCOME,
  transactionCategory: Object.values(transactionsCategories)[0],
  transactionSum: "",
  transactionComment: "",
  transactionDate: new Date(),
};

function ExpenceBlock() {
  const [userInput, setUserInput] = useState(initialState);

  const getValue = (name) => (event) => {
    const { value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const getDateValue = (date) => {
    setUserInput({ ...userInput, transactionDate: date.toDate() });
  };
  return (
    <div className="expence-block">
      <div className="expence-block__wrap">
        <div className="expence-block__account">
          <FormControl>
            <InputLabel variant="standard" className="title-field">
              Bank account
            </InputLabel>
            <NativeSelect
              className="select-field"
              defaultValue="monobank"
              value={userInput.bankAcc}
              onChange={getValue("bankAcc")}
            >
              <option value="monobank">Monobank</option>
              <option value="privat">Privat</option>
              <option value="pumb">PUMB</option>
            </NativeSelect>
          </FormControl>
        </div>

        <div className="expence-block__type">
          <FormControl>
            <InputLabel variant="standard" className="title-field">
              Type
            </InputLabel>
            <NativeSelect
              className="select-field"
              defaultValue="outcome"
              value={userInput.transactionType}
              onChange={getValue("transactionType")}
            >
              <option value="outcome">Outcome</option>
              <option value="income">Income</option>
            </NativeSelect>
          </FormControl>
        </div>

        <div className="expence-block__category">
          <FormControl>
            <InputLabel variant="standard" className="title-field">
              Category
            </InputLabel>
            <NativeSelect
              className="select-field"
              defaultValue="outcome"
              value={userInput.transactionCategory}
              onChange={getValue("transactionCategory")}
            >
              {Object.values(transactionsCategories).map((category) => (
                <option key={category} value={category}>
                  {upperFirst(category)}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </div>

        <div className="expence-block__sum">
          <FormControl>
            <InputLabel variant="standard" className="title-field">
              Sum
            </InputLabel>
            <Input
              className="select-field"
              value={userInput.transactionSum}
              onChange={getValue("transactionSum")}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>
        </div>

        <div className="expence-block__comment">
          <FormControl>
            <TextField
              id="standard-basic"
              label="Comment"
              variant="standard"
              value={userInput.transactionComment}
              onChange={getValue("transactionComment")}
            />
          </FormControl>
        </div>

        <div className="expence-block__date">
          <FormControl>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DesktopDatePicker
                className="expence-block__date-picker"
                label="Date"
                inputFormat="DD/MM/YYYY"
                value={moment(userInput.transactionDate)}
                onChange={getDateValue}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
        </div>

        <div className="expence-block__buttons">
          <Button
            className="clear-btn"
            variant="text"
            onClick={() => {
              setUserInput(initialState);
            }}
          >
            Clear
          </Button>
          <Button className="add-btn" variant="contained">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ExpenceBlock;
