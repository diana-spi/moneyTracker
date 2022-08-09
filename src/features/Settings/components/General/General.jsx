import { Button, FormControl, InputLabel, NativeSelect } from "@mui/material";
import "./General.scss";

function General() {
  const currencies = {
    name: "USD",
    symbol: "$",
  };
  const languages = {
    name: "English",
  };
  const firstDay = {
    name: "Monday",
  };
  return (
    <div className="general-set">
      <div className="general-set__fields">
        <div className="general-set__curency field">
          <FormControl>
            <InputLabel variant="standard" className="title-field">
              Currency
            </InputLabel>
            <NativeSelect>
              <option value={currencies.name}>
                {currencies.name} {currencies.symbol}
              </option>
            </NativeSelect>
          </FormControl>
        </div>
        <div className="general-set__language field">
          <FormControl>
            <InputLabel variant="standard" className="title-field">
              Language
            </InputLabel>
            <NativeSelect>
              <option value={languages.name}>{languages.name}</option>
            </NativeSelect>
          </FormControl>
        </div>
        <div className="general-set__first-day field">
          <FormControl>
            <InputLabel variant="standard" className="title-field">
              First day of week
            </InputLabel>
            <NativeSelect>
              <option value={firstDay.name}>{firstDay.name}</option>
            </NativeSelect>
          </FormControl>
        </div>
      </div>
      <div className="general-set__button">
        <Button variant="contained">Save</Button>
      </div>
    </div>
  );
}
// Currency
// Language
// First day of the week
// Reminders

export default General;
