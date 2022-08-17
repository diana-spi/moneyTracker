import "./ExpenceBlock.scss";
import { useState } from "react";
import moment from "moment";
import { transactionsCategories, transactionTypes, transactionsAccounts } from "../../data/transactions";
import { Button, FormControl, InputLabel, NativeSelect, TextField, InputAdornment, Input } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { upperFirst } from "lodash";
import { useForm, Controller } from "react-hook-form";

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
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      bankAcc: "monobank",
      type: "outcome",
      category: "food",
      sum: null,
      comment: "",
      date: new Date(),
    },
  });

  const getValue = (name) => (event) => {
    const { value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const getDateValue = (date) => {
    setUserInput({ ...userInput, transactionDate: date.toDate() });
  };
  const onSubmit = (data) => console.log(data);

  return (
    <div className="expence-block">
      <div className="expence-block__wrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="expence-block__account">
            <FormControl>
              <InputLabel variant="standard" className="title-field">
                Bank account
              </InputLabel>
              <Controller
                name="bankAcc"
                control={control}
                render={({ field }) => (
                  <NativeSelect className="select-field" {...field}>
                    <option value="monobank">Monobank</option>
                    <option value="privat">Privat</option>
                    <option value="pumb">PUMB</option>
                  </NativeSelect>
                )}
              />
            </FormControl>
          </div>

          <div className="expence-block__type">
            <FormControl>
              <InputLabel variant="standard" className="title-field">
                Type
              </InputLabel>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <NativeSelect className="select-field" {...field}>
                    <option value="outcome">Outcome</option>
                    <option value="income">Income</option>
                  </NativeSelect>
                )}
              />
            </FormControl>
          </div>

          <div className="expence-block__category">
            <FormControl>
              <InputLabel variant="standard" className="title-field">
                Category
              </InputLabel>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <NativeSelect className="select-field" {...field}>
                    {Object.values(transactionsCategories).map((category) => (
                      <option key={category} value={category}>
                        {upperFirst(category)}
                      </option>
                    ))}
                  </NativeSelect>
                )}
              />
            </FormControl>
          </div>

          <div className="expence-block__sum">
            <FormControl>
              <InputLabel variant="standard" className="title-field">
                Sum
              </InputLabel>
              <Controller
                name="sum"
                control={control}
                render={({ field }) => (
                  <Input
                    className="select-field"
                    {...field}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  />
                )}
              />
            </FormControl>
          </div>

          <div className="expence-block__comment">
            <FormControl>
              <Controller
                name="comment"
                control={control}
                render={({ field }) => <TextField id="standard-basic" label="Comment" variant="standard" {...field} />}
              />
            </FormControl>
          </div>

          <div className="expence-block__date">
            <FormControl>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DesktopDatePicker
                      className="expence-block__date-picker"
                      label="Date"
                      inputFormat="DD/MM/YYYY"
                      {...field}
                      onChange={(date) => setValue("date", date.toDate())}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                )}
              />
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
            <Button type="submit" className="add-btn" variant="contained">
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExpenceBlock;
