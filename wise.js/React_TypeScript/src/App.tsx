import React, { useContext, createContext, ReactNode } from "react";

interface Theme {
	color: string;
	background: string;
}

type AvailableThemes = "light" | "dark";

const themes: Record<AvailableThemes, Theme> = {
	light: {
		color: "#000000",
		background: "#000000",
	},
	dark: {
		color: "#ffffff",
		background: "#222222",
	},
};

const ThemeContext = createContext({
	theme: themes.dark,
	toggle: () => {},
});

const ThemeProvider: React.FC = ({
	children,
}: {
	children: React.ReactNode;
}) => {};

const Hooks = () => {
	const theme = useContext<Theme>(ThemeContext);
	return (
		<button style={{ background: theme.background, color: theme.color }}>
			some button
		</button>
	);
};

function App() {
	return (
		<div className="container flex">
			<Hooks />
		</div>
	);
}

export default App;
