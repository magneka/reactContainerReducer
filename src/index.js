import React from "react";
import ReactDOM from "react-dom";
//import lokiThunk from "./lokiRepo";
//require testModule from './testModule'

import App from "./App";

//testModule().incrementCounter()
//lokiThunk.seed()
//const { seed } = lokiRepo("vikings");
//seed();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
