import React, { useEffect, useState } from "react";
import { Card, CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventExample from "./components/EventExample";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import { NavLink } from "react-router-dom";
import TodoItemPage from "./components/TodoItemPage";
import UserItemPage from "./components/UserItemPage";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<NavLink to="/users">Пользователи</NavLink>&nbsp;
					<NavLink to="/todos">Список дел</NavLink>
					<NavLink to="/todo/1">Дело</NavLink>
				</div>
				<Routes>
					<Route path="/users" element={<UserPage />} />
					<Route path="/todos" element={<TodosPage />} />
					<Route path="/user/:id" element={<UserItemPage />} />
					<Route path="/todo/:id" element={<TodoItemPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
