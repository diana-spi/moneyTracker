import "./App.scss";
import MainPage from "./features/MainPage/MainPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./features/Settings/Settings";
import { Suspense } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f88a1e", //$primary-color
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
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback="loading">
                  <MainPage />
                </Suspense>
              }
            />
            <Route
              path="/settings"
              element={
                <Suspense fallback="loading">
                  <>
                    <MainPage />
                    <Settings />
                  </>
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
