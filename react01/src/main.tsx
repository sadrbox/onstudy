import React from "react";
import ReactDOM from "react-dom/client";
import Products from "./objects/Products";
// import DataGrid from "./ui/DataGrid/index.tsx";
import "./index.css";
import { Provider } from "jotai";

ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
	<Provider>
		<Products />
	</Provider>
	// </React.StrictMode>
);
