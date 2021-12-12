import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import "./Index.css";
ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root"),
);
