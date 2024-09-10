import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Post from "./objects/Post";
// import DataGrid from "./ui/DataGrid/index.tsx";
import "./index.css";
// import { Provider } from "jotai";
import Products from "./objects/Products";
import Users from "./objects/Users";
import TabBar from "./ui/TabBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/post",
    element: <Post />,
  },
  {
    path: "/users/lst",
    element: <Users />,
  },
  { path: "/users/elm", element: <Users /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <TabBar /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
