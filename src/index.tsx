// index.jsx

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";

// 다크 테마 설정: 텍스트 색상과 배경 색상을 정의합니다.
const darkTheme = {
	textColor: "whitesmoke",
	backgroundColor: "#111",
};

// 라이트 테마 설정: 텍스트 색상과 배경 색상을 정의합니다.
const lightTheme = {
	textColor: "#111",
	backgroundColor: "whitesmoke",
};

function Root() {
	// 테마 상태 관리: 초기값을 다크 테마로 설정합니다.
	const [isDarkMode, setIsDarkMode] = useState(true);

	// 테마 변경 함수: 현재 테마 상태를 반전시킵니다.
	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	return (
		<React.StrictMode>
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<App toggleTheme={toggleTheme} />
			</ThemeProvider>
		</React.StrictMode>
	);
}

ReactDOM.render(<Root />, document.getElementById("root"));