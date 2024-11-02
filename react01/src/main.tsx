import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import DataGrid from "./ui/DataGrid/index.tsx";
import "@/styles/index.css";
// import { Provider } from "jotai";
import Products from "./objects/Products";
import Users from "./objects/Users";
import Todos from "./objects/Todos";
import Counterparties from "./objects/Counterparties";
// import TabBar from "@/components/ui/TabBar";

const router = createBrowserRouter([
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: '/counterparties',
    element: <Counterparties />
  },
  { path: "/users/elm", element: <Users /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {/* <TabBar /> */}
    <RouterProvider router={router} />
  </>,
);
