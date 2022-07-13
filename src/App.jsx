import "./App.scss";
import MainPage from "./features/MainPage/MainPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
