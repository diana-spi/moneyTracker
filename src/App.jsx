import "./App.scss";
import MainPage from "./features/MainPage/MainPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#74c8da", //$primary-color
    },
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          margin: "0 !important",
          padding: "0 !important",
        },
        item: {
          margin: "0 !important",
          padding: "0 !important",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
