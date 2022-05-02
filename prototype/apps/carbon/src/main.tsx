import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Carbon from "./Carbon";

ReactDOM.render(
  <BrowserRouter>
    <Carbon />
  </BrowserRouter>,
  document.getElementById("root")
);
