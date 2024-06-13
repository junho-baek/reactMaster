// App.jsx

import styled from "styled-components";

// Title 컴포넌트: 테마에 따라 텍스트 색상을 설정합니다.
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

// Wrapper 컴포넌트: 테마에 따라 배경 색상을 설정하고, 화면 중앙에 정렬합니다.
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

// Button 컴포넌트: 테마 변경을 위한 버튼을 스타일링합니다.
const ToggleButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.textColor};
`;

// App 컴포넌트: Wrapper와 Title 컴포넌트를 포함하고, 테마 변경 버튼을 추가합니다.
function App({ toggleTheme }) {
  return (
    <Wrapper>
      <Title>Hello</Title>
      <ToggleButton onClick={toggleTheme}>
        Toggle Theme
      </ToggleButton>
    </Wrapper>
  );
}

export default App;