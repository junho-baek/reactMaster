## nomad coder react master class 시작
알겠습니다. 이전 강의들의 내용을 바탕으로 README.md 파일을 확장하겠습니다.

### README.md


# React with TypeScript

## #2.5 Pseudo Selectors part Two (04:49)

### Pseudo Selectors와 컴포넌트화

#### index.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

#### App.jsx

```jsx
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
```

#### 설명

- **ThemeProvider:** styled-components에서 제공하는 컴포넌트로, 하위 컴포넌트에 테마 객체를 전달합니다.
- **Theme 객체:** 텍스트 색상과 배경 색상과 같은 스타일링 정보를 포함합니다.
- **Theme 적용:** styled-components의 props를 통해 테마 속성에 접근할 수 있습니다.

### #2.7 Themes (08:47)

#### index.tsx

```typescript
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

#### App.tsx

```typescript
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
```

### #3.1 DefinitelyTyped (09:51)

#### index.tsx

```typescript
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

function Root() {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
```

#### App.tsx

```typescript
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const ToggleButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.textColor};
`;

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
```

#### 설명

- **ThemeProvider:** styled-components에서 제공하는 컴포넌트로, 하위 컴포넌트에 테마 객체를 전달합니다.
- **Theme 객체:** 텍스트 색상과 배경 색상과 같은 스타일링 정보를 포함합니다.
- **테마 변경:** `useState`와 클릭 이벤트를 통해 현재 테마 상태를 관리하고 변경합니다.
- **ToggleButton:** 버튼 클릭 시 테마를 변경하는 기능을 제공합니다.

### CRA와 Vite의 차이점

- **CRA (Create React App)**
  - 설정 없이 바로 사용 가능
  - 초보자에게 적합
  - 빌드 속도 느림

- **Vite**
  - 빠른 빌드 속도
  - 경량화된 설정
  - 더 나은 개발 경험 제공

### TypeScript 사용 시 유의할 점

- TypeScript 설정 파일인 `tsconfig.json`을 통해 설정을 커스터마이즈할 수 있습니다.
- 반드시 타입 정의 파일을 설치해 사용하세요 (예: `@types/react`, `@types/styled-components`).

이 문서는 기본적인 설정과 사용법을 다루었으며, 추가적인 정보는 공식 문서를 참조하세요.


### 커밋 메시지

```
#3.1 DefinitelyTyped (09:51)

feat: Add TypeScript setup and styled-components types

- Added TypeScript support for the project
- Installed and configured @types/styled-components for TypeScript
- Provided examples for using ThemeProvider with styled-components
- Compared CRA and Vite for React with TypeScript
- Included TypeScript usage tips and best practices
```



- 2.2 스타일 컴포넌트가 많은 부분 겹칠 때 해결법
- 3.0 -TypeScript는 JS를 기반으로 한 프로그래밍 언어다.
-하지만 큰 차이점은 없고 살짝 새로운 기능만 추가한 것이다.
-ts는 strongly-typed언어다. 이것은 언어가 작동하기 전에 type을 확인한다는 것이다.
-js는 strong-type이 아니다. js는 어느 데이터 타입인지 신경쓰지 않는다.
-ts는 프로그램을 돌리기 전에 무엇이 잘못되었는지 얘기해준다.
-물론 컴퓨터는 js밖에 이해할 수 없어서 publish 전에 js가 ts로 compile해준다.

# React with TypeScript

## #3.1 DefinitelyTyped (09:51)

이 문서는 React 프로젝트에서 TypeScript를 사용하는 방법에 대해 설명합니다.

### 1. TypeScript 설치 및 설정

- CRA(Create React App)와 Vite 모두 TypeScript 지원 템플릿을 제공합니다.
  - CRA: `npx create-react-app my-app --template typescript`
  - Vite: `npm create vite@latest my-app -- --template react-ts`

### 2. 스타일드 컴포넌트 타입 추가

프로젝트에서 `styled-components`를 사용할 때 TypeScript 지원을 위해 `@types/styled-components`를 설치해야 합니다.

```bash
npm install --save-dev @types/styled-components
```


## Running React on Replit

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the vite docs for [serving production websites](https://vitejs.dev/guide/build.html)

### Typescript

Just rename any file from `.jsx` to `.tsx`. You can also try our [TypeScript Template](https://replit.com/@replit/React-TypeScript)