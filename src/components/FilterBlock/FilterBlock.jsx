import "./FilterBlock.scss";
import * as React from "react";
import { OutlinedInput, InputLabel, MenuItem, FormControl, Select, Box, Chip, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CalendarPicker } from "mui-calendar-picker";

const names = ["Monobank", "Privat", "PUMB"];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}
function FilterBlock() {
  const [value, setValue] = React.useState([null, null]);

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

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
        <Button className="filter-block__btn" variant="outlined">
          Day
        </Button>
        <Button className="filter-block__btn" variant="outlined">
          Week
        </Button>
        <Button className="filter-block__btn" variant="outlined">
          Month
        </Button>
        <Button className="filter-block__btn" variant="outlined">
          Year
        </Button>

        <CalendarPicker
          theme={theme}
          openBtnText={"Period"} // optional
          todayBtnText={"Back to Today"} // optional
          confirmBtnText={"Submit"} // optional
          className="filter-block__btn"
        />
      </div>
      <div className="filter-block__bank-acc">
        <FormControl className="filter-block__form">
          <InputLabel id="demo-multiple-chip-label">Bank account</InputLabel>
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
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default FilterBlock;
