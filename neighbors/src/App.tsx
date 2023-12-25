import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Neighbors from "./components/Neighbors";

const App: React.FC = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<Neighbors />
		</>
	);
};

export default App;
