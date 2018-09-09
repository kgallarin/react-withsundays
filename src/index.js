import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import "typeface-roboto";
import registerServiceWorker from "./registerServiceWorker";
import uiThemeConfig from "./styles/MuiThemeConfig";

const theme = createMuiTheme(uiThemeConfig);

const WithSundaysApp = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<WithSundaysApp />, document.getElementById("root"));
registerServiceWorker();
