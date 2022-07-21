import "./FilterBlock.scss";
import React, { useState } from "react";
import { OutlinedInput, InputLabel, MenuItem, FormControl, Select, Box, Chip, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CalendarPicker } from "mui-calendar-picker";

const names = ["Monobank", "Privat", "PUMB"];

const intervalVariants = {
  DAY: "day",
  WEEK: "week",
  MONTH: "month",
  YEAR: "year",
  NOTHING: null,
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

function FilterBlock() {
  const [selectedInterval, setSelectedInterval] = useState(intervalVariants.DAY);
  const [dateRange, setDateRange] = useState(null);

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const onSelectInterval = (interval) => {
    setSelectedInterval(interval);
    setDateRange(null);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
              setSelectedInterval(intervalVariants.NOTHING);
            }}
          />
        </div>
      </div>
      <div className="filter-block__bank-acc">
        <FormControl className="filter-block__form" size="small">
          <Select
            className="filter-block__select"
            multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
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
              <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>

          {/* <InputLabel id="demo-multiple-chip-label">Bank account</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label=">Bank account" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select> */}
        </FormControl>
      </div>
    </div>
  );
}

export default FilterBlock;
