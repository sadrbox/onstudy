import React from "react";
import ReactDOM from "react-dom/client";
import Post from "./objects/Post";
// import DataGrid from "./ui/DataGrid/index.tsx";
import "./index.css";
import { Provider } from "jotai";
import Products from "./objects/Products";
import Users from "./objects/Users";
import TabBar from "./ui/TabBar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider>
    <TabBar />
    <Users />
  </Provider>,
  // </React.StrictMode>
);
