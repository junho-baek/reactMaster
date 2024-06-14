## nomad coder react master class 시작
알겠습니다. 이전 강의들의 내용을 바탕으로 README.md 파일을 확장하겠습니다.

### README.md

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



## #3.2 Typing the Props (12:19)

### 인터페이스를 사용하여 Props 타입 정의하기

#### 주요 내용:
- TypeScript의 인터페이스를 사용하여 props의 타입을 정의하면 컴파일 전에 오류를 찾을 수 있습니다.
- 객체지향 프로그래밍에서 인터페이스는 클래스와 같은 객체의 구조를 정의합니다.
- 인터페이스를 사용하면 코드의 유지보수성과 가독성이 높아집니다.
- 컴파일 타임에 타입 체크를 통해 오류를 사전에 방지할 수 있습니다.

### 코드 예시

#### App.tsx

```typescript
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;
```

#### Circle.tsx

```typescript
import styled from "styled-components";

// CircleProps 인터페이스 정의: bgColor 속성을 string 타입으로 설정합니다.
interface CircleProps {
  bgColor: string;
}

// Container 컴포넌트: CircleProps를 사용하여 스타일링된 div입니다.
const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

// Circle 컴포넌트: bgColor props를 받아서 Container를 렌더링합니다.
function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
```

#### index.tsx

```typescript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```


### 주석

#### App.tsx

```typescript
import Circle from "./Circle";

// App 컴포넌트: Circle 컴포넌트를 사용하여 배경색을 다르게 설정합니다.
function App() {
  return (
    <div>
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;
```

#### Circle.tsx

```typescript
import styled from "styled-components";

// CircleProps 인터페이스 정의: bgColor 속성을 string 타입으로 설정합니다.
interface CircleProps {
  bgColor: string;
}

// Container 컴포넌트: CircleProps를 사용하여 스타일링된 div입니다.
const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

// Circle 컴포넌트: bgColor props를 받아서 Container를 렌더링합니다.
function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
```

#### index.tsx

```typescript
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
```

### 커밋 메시지

```
#3.2 Typing the Props (12:19)

feat: Add prop typing with TypeScript interfaces

- Defined CircleProps interface for typing props
- Styled Circle component using styled-components with props
- Demonstrated usage of props with typed components in App
- Highlighted the advantages of using TypeScript interfaces for prop typing
```


## #3.3 Optional Props (09:48)

### 옵셔널 속성 및 디폴트값 설정

#### 주요 내용:
- TypeScript의 인터페이스에서 옵셔널 속성을 정의하는 방법을 학습합니다.
- 컴포넌트의 props에 기본값을 설정하는 문법을 이해합니다.
- TypeScript의 `??` (nullish 병합 연산자)를 사용하여 값이 null 또는 undefined일 때 대체값을 설정하는 방법을 배웁니다.

### 코드 예시

#### App.tsx

```typescript
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="im here" bgColor="tomato" />
    </div>
  );
}

export default App;
```

#### Circle.tsx

```typescript
import styled from "styled-components";

// ContainerProps 인터페이스 정의: bgColor와 borderColor 속성을 포함합니다.
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

// Container 컴포넌트: CircleProps를 사용하여 스타일링된 div입니다.
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

// CircleProps 인터페이스 정의: bgColor는 필수, borderColor와 text는 선택 속성입니다.
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

// Circle 컴포넌트: bgColor와 선택적인 borderColor, text를 받아서 Container를 렌더링합니다.
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
```

#### index.tsx

```typescript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

### 설명

- **옵셔널 속성:** 인터페이스에서 `borderColor?`와 `text?`로 옵셔널 속성을 정의하면 해당 속성이 제공되지 않을 때도 오류가 발생하지 않습니다.
- **디폴트값 설정:** `Circle` 컴포넌트에서 `text` 속성에 기본값을 "default text"로 설정했습니다.
- **nullish 병합 연산자 `??`:** `borderColor`가 null 또는 undefined일 경우 `bgColor`를 대신 사용합니다. `??` 연산자는 null 또는 undefined일 때만 대체값을 설정합니다.

### 커밋 메시지

```
#3.3 Optional Props (09:48)

feat: Add optional props and default values in Circle component

- Defined optional props in CircleProps interface
- Set default values for text prop in Circle component
- Used nullish coalescing operator (??) for borderColor prop
```


## #3.4 State (06:17)

### useState를 사용한 상태 관리

#### 주요 내용:
- useState를 사용하여 컴포넌트 내에서 상태를 관리합니다.
- TypeScript와 함께 useState를 사용할 때 타입 추론 및 명시적인 타입 정의 방법을 학습합니다.
- useState의 두 번째 인자인 상태 변경 함수의 타입을 명확히 설명합니다.

### 코드 예시

#### App.tsx

```typescript
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;
```

#### Circle.tsx

```typescript
import { useState } from "react";
import styled from "styled-components";

// ContainerProps 인터페이스 정의: bgColor와 borderColor 속성을 포함합니다.
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

// Container 컴포넌트: CircleProps를 사용하여 스타일링된 div입니다.
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

// CircleProps 인터페이스 정의: bgColor는 필수, borderColor는 선택 속성입니다.
interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

// Circle 컴포넌트: bgColor와 선택적인 borderColor를 받아서 Container를 렌더링하고, useState를 사용하여 상태를 관리합니다.
function Circle({ bgColor, borderColor }: CircleProps) {
  // useState를 사용하여 상태(value)를 정의합니다. 초기 값은 빈 문자열입니다.
  const [value, setValue] = useState<string>("");
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;
```

### 설명

- **useState:** React 훅으로 함수형 컴포넌트에서 상태를 관리할 수 있습니다.
- **타입 추론:** TypeScript는 useState의 초기 값을 기반으로 상태와 상태 변경 함수의 타입을 추론합니다.
- **명시적 타입 정의:** `<string>`와 같이 제네릭을 사용하여 상태의 타입을 명시적으로 정의할 수 있습니다.
- **상태 변경 함수:** useState의 두 번째 반환 값인 함수는 상태의 타입과 일치하는 값을 인자로 받아야 합니다. 다른 타입의 값을 반환하려면 타입을 명시적으로 표기해야 합니다.

### 커밋 메시지

```
#3.4 State (06:17)

feat: Add state management with useState in Circle component

- Implemented useState for managing state in Circle component
- Emphasized TypeScript type inference and explicit type definitions with useState
- Highlighted the importance of matching types for state and state updater function
```

