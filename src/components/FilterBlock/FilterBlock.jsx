import "./FilterBlock.scss";
import { useState } from "react";
import { OutlinedInput, FormControl, Select, Button, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CalendarPicker } from "mui-calendar-picker";
import intervalVariants from "../../constans/filterValues";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { upperCase } from "lodash";
import { daysToWeeks } from "date-fns";

const names = ["Monobank", "Privat", "PUMB"];

function getStyles(name, selectedBankAcc, theme) {
  return {
    fontWeight:
      selectedBankAcc.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

function FilterBlock({ onSelectFilter, onSelectBankAcc }) {
  const [selectedInterval, setSelectedInterval] = useState(intervalVariants.MONTH);
  const [dateRange, setDateRange] = useState(null);

  console.log(dateRange);

  const theme = useTheme();
  const [selectedBankAcc, setSelectedBankAcc] = useState(names);

  const onSelectInterval = (interval, dates) => {
    setSelectedInterval(interval);
    setDateRange(dates);
    onSelectFilter(interval, dates);
  };

  const onChangeBankAcc = (event) => {
    setSelectedBankAcc(event.target.value);
    onSelectBankAcc(event.target.value);
  };

  return (
    <div className="filter-block">
      <div className="filter-block__buttons">
        <Button
          className="filter-block__btn"
          variant={selectedInterval === intervalVariants.DAY ? "contained" : "outlined"}
          onClick={() => onSelectInterval(intervalVariants.DAY)}
        >
          Day
        </Button>
        <Button
          className="filter-block__btn"
          variant={selectedInterval === intervalVariants.WEEK ? "contained" : "outlined"}
          onClick={() => onSelectInterval(intervalVariants.WEEK)}
        >
          Week
        </Button>
        <Button
          className="filter-block__btn"
          variant={selectedInterval === intervalVariants.MONTH ? "contained" : "outlined"}
          onClick={() => onSelectInterval(intervalVariants.MONTH)}
        >
          Month
        </Button>
        <Button
          className="filter-block__btn"
          variant={selectedInterval === intervalVariants.YEAR ? "contained" : "outlined"}
          onClick={() => onSelectInterval(intervalVariants.YEAR)}
        >
          Year
        </Button>
        <div className={`filter-block__calendar${dateRange ? "--filled" : ""}`}>
          <CalendarPicker
            theme={theme}
            openBtnText={"Period"} // optional
            todayBtnText={"Back to Today"} // optional
            confirmBtnText={"Submit"} // optional
            setDateRange={(dateRange) => {
              setDateRange(dateRange);
              onSelectInterval(intervalVariants.PERIOD, dateRange);
            }}
          />
          {/* <DateRangePicker
            value={dateRange}
            calendarIcon={upperCase("Period")}
            clearIcon={null}
            locale={"en-EN"}
            onChange={([start, end]) => {
              onSelectInterval(intervalVariants.PERIOD, { start, end });
            }}
          /> */}
        </div>
      </div>
      <div className="filter-block__bank-acc">
        <FormControl className="filter-block__form" size="small">
          <Select
            className="filter-block__select"
            multiple
            displayEmpty
            value={selectedBankAcc}
            onChange={onChangeBankAcc}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Bank account</em>;
              }

              return selected.join(", ");
            }}
            inputProps={{ "aria-label": "Without label" }}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, selectedBankAcc, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default FilterBlock;
