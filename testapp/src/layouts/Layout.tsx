import React from "react";
import Header from "./parts/Header";
import Main from "./parts/Main";
import Footer from "./parts/Footer";

type Props = {};

const Layout = (props: Props) => {
	return (
		<div className="layout h-screen">
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

export default Layout;
