import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./Navbar.jsx";
import Trusted from "./Trusted.jsx";
import How from "./How.jsx";
import Out from "./Out.jsx";
import Footer from "./Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Navbar />
		<App />
		<Trusted />
		<How />
		<Out />
		<Footer />
	</React.StrictMode>
);
