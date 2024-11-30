import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import DataGrid from "./ui/DataGrid/index.tsx";
import "@/styles/index.css";
// import "@/styles/variables.scss"
// import { Provider } from "i4utai";
import Products from "./objects/Products";
import Users from "./objects/Users";
import Todos from "./objects/Todos";
import Counterparties from "./objects/Counterparties";
import CounterpartiesCreate from "./objects/Counterparties/form";
import TabBar from "src/components/ui/Tabs";
import { App } from "./components/app";

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
  {
    path: '/counterparties/create',
    element: <CounterpartiesCreate />
  },
  { path: "/users/elm", element: <Users /> },
]);



ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    {/* <TabBar tabs={tabs} /> */}
    {/* <RouterProvider router={router} /> */}
  </>,
);
