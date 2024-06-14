import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// ReactDOM.render: React 애플리케이션을 'root' 엘리먼트에 렌더링합니다.
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);