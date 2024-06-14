import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

// Wrapper 컴포넌트: 테마에 따라 배경 색상을 설정합니다.
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

// Button 컴포넌트: 테마에 따라 버튼 색상을 설정합니다.
const Button = styled.button`
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.textColor};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);

  // 테마를 토글하는 함수입니다.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <h1>Theme Toggle Example</h1>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;