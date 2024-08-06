import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import App from "App";
import { ThemeProvider } from "@mui/material/styles";
import { baseDarkTheme } from "utils/theme/DefaultColors";
import FullLayout from "components/layout/FullLayout";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={baseDarkTheme}>
      <Router>
        <FullLayout>
          <App />
        </FullLayout>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
