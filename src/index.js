import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";

import AuthProvider from "./contexts/authcontexts";
import DataProvider from "./contexts/datacontext";

ReactDOM.render(
  <AuthProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </AuthProvider>,
  document.getElementById("root")
);
