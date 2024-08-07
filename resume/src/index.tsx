import "bulma/css/bulma.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./Container";

let container = document.getElementById("root");
if (!container) {
	container = document.createElement("div");
	document.body.appendChild(container);
}

ReactDOM.createRoot(container).render(
	<React.StrictMode>
		<Container />
	</React.StrictMode>,
);
