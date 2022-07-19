import "./ExpenceBlock.scss";
import {
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
  InputAdornment,
  Input,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

function ExpenceBlock() {
  return (
    <div className="expence-block">
      <div className="expence-block__wrap">
        <div className="expence-block__account">
          <FormControl>
            <InputLabel variant="standard" className="title-field">
              Bank account
            </InputLabel>
            <NativeSelect className="select-field" defaultValue="monobank">
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
            <NativeSelect className="select-field" defaultValue="outcome">
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
            <NativeSelect className="select-field" defaultValue="outcome">
              <option value="car">Car</option>
              <option value="health">Health</option>
              <option value="food">Food</option>
              <option value="rentAFlat">Rent a flat</option>
              <option value="regularExpence">Regular expence</option>
              <option value="other">Other</option>
            </NativeSelect>
          </FormControl>
        </div>

        <div className="expence-block__sum">
          <FormControl>
            <InputLabel variant="standard" className="title-field">
              Sum
            </InputLabel>
            <Input className="select-field" startAdornment={<InputAdornment position="start">$</InputAdornment>} />
          </FormControl>
        </div>

        <div className="expence-block__comment">
          <FormControl>
            <TextField id="standard-basic" label="Comment" variant="standard" />
          </FormControl>
        </div>

        <div className="expence-block__date">
          <FormControl>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DesktopDatePicker
                className="expence-block__date-picker"
                label="Date"
                inputFormat="DD/MM/YYYY"
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
        </div>

        <div className="expence-block__buttons">
          <Button className="clear-btn" variant="text">
            Clear
          </Button>
          <Button className="add-btn" variant="contained">
            Add
          </Button>
        </div>
      </div>
      {/* <Accordion className="expence-block__accardion" defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className="expence-block__title" variant="h6">
            Add transaction
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="expence-block__wrap">
            <div className="expence-block__type">
              <FormControl>
                <InputLabel variant="standard" className="title-field">
                  Type
                </InputLabel>
                <NativeSelect className="select-field" defaultValue="outcome">
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
                <NativeSelect className="select-field" defaultValue="outcome">
                  <option value="car">Car</option>
                  <option value="health">Health</option>
                  <option value="food">Food</option>
                  <option value="rentAFlat">Rent a flat</option>
                  <option value="regularExpence">Regular expence</option>
                  <option value="other">Other</option>
                </NativeSelect>
              </FormControl>
            </div>

            <div className="expence-block__sum">
              <FormControl>
                <InputLabel variant="standard" className="title-field">
                  Sum
                </InputLabel>
                <Input className="select-field" startAdornment={<InputAdornment position="start">$</InputAdornment>} />
              </FormControl>
            </div>

            <div className="expence-block__comment">
              <FormControl>
                <TextField id="standard-basic" label="Comment" variant="standard" />
              </FormControl>
            </div>

            <div className="expence-block__date">
              <FormControl>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DesktopDatePicker
                    className="expence-block__date-picker"
                    label="Date"
                    inputFormat="DD/MM/YYYY"
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </FormControl>
            </div>

            <div className="expence-block__buttons">
              <Button className="clear-btn" variant="text">
                Clear
              </Button>
              <Button className="add-btn" variant="contained">
                Add
              </Button>
            </div>
          </div>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}

export default ExpenceBlock;
