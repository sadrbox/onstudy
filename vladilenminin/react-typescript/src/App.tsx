import React from "react";
import { Navbar } from "./components/Navbar";
import TodosPages from "./pages/TodosPages";
import AboutPages from "./pages/AboutPages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="container">
				<Routes>
					<Route element={<TodosPages />} path="/" />
					<Route element={<AboutPages />} path="/about" />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
