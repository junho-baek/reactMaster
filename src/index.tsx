import React, { useState } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { lightTheme, darkTheme } from "./theme";

// React Query 클라이언트 설정
const queryClient = new QueryClient();

function Root() {
	const [theme, setTheme] = useState(lightTheme);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
	};

	return (
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<App toggleTheme={toggleTheme} />
				</ThemeProvider>
			</QueryClientProvider>
		</React.StrictMode>
	);
}

ReactDOM.render(<Root />, document.getElementById("root"));