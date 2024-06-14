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


## #3.5 Forms (09:02)

### 폼 입력값을 상태로 관리하기

#### 주요 내용:
- 폼의 입력값을 state로 관리하는 방법을 학습합니다.
- `any` 타입을 피해야 하는 이유와 대안을 배웁니다.
- `currentTarget`의 의미와 이벤트에서 접근하는 방법을 이해합니다.
- 클릭과 서브밋 이벤트 처리 방법을 학습합니다.
- 리액트 폼 이벤트와 타입에 대해 설명합니다.

### 코드 예시

#### App.tsx

```typescript
import React, { useState } from "react";

function App() {
  // 입력값을 상태로 관리합니다. 초기값은 빈 문자열입니다.
  const [value, setValue] = useState("");

  // 입력값 변경 시 호출되는 함수입니다. 이벤트 객체에서 현재 타겟의 값을 추출합니다.
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  // 폼 제출 시 호출되는 함수입니다. 기본 동작을 막고, 현재 입력값을 콘솔에 출력합니다.
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  return (
    <div>
      {/* 폼 컴포넌트입니다. 제출 시 onSubmit 함수를 호출합니다. */}
      <form onSubmit={onSubmit}>
        {/* 입력 컴포넌트입니다. 입력값 변경 시 onChange 함수를 호출합니다. */}
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
```

### 설명

- **폼 입력값을 state로 관리:** 입력값을 state로 관리하여 React 컴포넌트의 상태와 동기화합니다.
- **`any` 타입 피하기:** `any` 타입을 사용하면 TypeScript의 타입 체크 기능을 활용할 수 없으므로, 가능한 구체적인 타입을 사용합니다.
- **`currentTarget`:** 이벤트가 발생한 요소를 나타내며, 여기서는 입력 필드의 값을 가져오는 데 사용됩니다.
- **이벤트 처리:** 입력 이벤트와 폼 제출 이벤트를 처리하여 사용자의 입력을 상태로 반영하고, 폼 제출 시 추가 동작을 수행합니다.
- **ES6 구조 분해 할당:** ES6 문법을 사용하여 이벤트 객체에서 필요한 값을 추출합니다. 이는 코드의 가독성을 높이고 유지보수를 용이하게 합니다.

### 구조 분해 할당

구조 분해 할당(Destructuring Assignment)은 객체나 배열의 속성을 쉽게 추출하여 변수에 할당하는 ES6 문법입니다. 이는 코드의 가독성을 높이고 반복되는 코드를 줄이는 데 유용합니다.

#### 예시 코드

1. **객체 구조 분해 할당:**

```javascript
const user = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001"
  }
};

// 기존 방식
const name = user.name;
const age = user.age;
const city = user.address.city;

// 구조 분해 할당 방식
const { name, age, address: { city } } = user;

console.log(name); // John
console.log(age);  // 30
console.log(city); // New York
```

2. **배열 구조 분해 할당:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// 기존 방식
const first = numbers[0];
const second = numbers[1];

// 구조 분해 할당 방식
const [first, second, , , fifth] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(fifth);  // 5
```

구조 분해 할당을 사용하면 복잡한 객체나 배열에서 필요한 값만 쉽게 추출할 수 있어 코드가 더 간결해집니다.

### 커밋 메시지

```
#3.5 Forms (09:02)

feat: Manage form input values with useState in App component

- Implemented state management for form input values using useState
- Handled input change and form submit events
- Explained the use of TypeScript types in React form events
- Highlighted the importance of avoiding `any` type
- Added explanation and examples of destructuring assignment in JavaScript
```



## #3.6 Themes (08:42)

### 타입스크립트와 styled-components를 사용한 테마 관리

#### 주요 내용:
- 타입 스타일드 컴포넌트 설치 및 설정
- `styled.d.ts`를 통해 테마 인터페이스 정의
- `theme.ts`에서 실제 테마 설정
- 다크 모드와 라이트 모드를 토글할 수 있는 기능 추가

### 코드 예시


#### src/App.tsx

```typescript
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
```

#### src/index.tsx

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

#### src/styled.d.ts

```typescript
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
```

#### src/theme.ts

```typescript
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
  btnColor: "tomato",
};

export const darkTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
  btnColor: "teal",
};
```

### 설명

- **타입 스타일드 컴포넌트 설치:** TypeScript와 styled-components를 함께 사용하기 위해 `@types/styled-components` 패키지를 설치합니다.
- **테마 인터페이스 정의 (`styled.d.ts`):** 테마 객체의 타입을 정의하여 TypeScript가 이를 인식할 수 있도록 합니다.
- **실제 테마 설정 (`theme.ts`):** 다크 모드와 라이트 모드 테마를 정의합니다.
- **테마 토글 기능:** `App.tsx`에서 상태와 버튼을 사용하여 다크 모드와 라이트 모드를 전환할 수 있는 기능을 구현합니다.

### 커밋 메시지

```
#3.6 Themes (08:42)

feat: Add theme toggle functionality with TypeScript and styled-components

- Installed @types/styled-components for TypeScript support
- Defined theme interface in styled.d.ts
- Created light and dark themes in theme.ts
- Implemented theme toggle functionality in App component
```

# #3 Recap

## #3.1 DefinitelyTyped (09:51)
- **TypeScript와 DefinitelyTyped:** TypeScript와 DefinitelyTyped를 사용하여 타입 정의를 추가합니다.
- **타입 설정:** `@types/styled-components`를 설치하고 설정하여 styled-components와 TypeScript를 함께 사용합니다.
- **CRA와 Vite 비교:** CRA와 Vite의 차이점과 각 환경에서 TypeScript 설정 시 유의할 점을 학습합니다.

## #3.2 Typing the Props (12:19)
- **Props 타입 정의:** TypeScript의 인터페이스를 사용하여 props의 타입을 정의합니다.
- **기본값 설정:** 컴포넌트의 props에 기본값을 설정하는 방법을 학습합니다.

## #3.3 Optional Props (09:48)
- **옵셔널 속성:** 인터페이스에서 옵셔널 속성을 정의하는 방법을 학습합니다.
- **디폴트값:** props에 기본값을 설정하는 문법을 이해합니다.
- **nullish 병합 연산자 (`??`):** 값이 null 또는 undefined일 때 대체값을 설정하는 방법을 배웁니다.

## #3.4 State (06:17)
- **useState 사용:** useState를 사용하여 컴포넌트 내에서 상태를 관리합니다.
- **타입 추론 및 명시적 타입 정의:** TypeScript와 함께 useState를 사용할 때 타입 추론 및 명시적인 타입 정의 방법을 학습합니다.
- **상태 변경 함수 타입:** useState의 두 번째 반환 값인 상태 변경 함수의 타입을 명확히 설명합니다.

## #3.5 Forms (09:02)
- **폼 입력값 관리:** 폼의 입력값을 state로 관리하는 방법을 학습합니다.
- **any 타입 피하기:** `any` 타입을 피해야 하는 이유와 대안을 배웁니다.
- **이벤트 처리:** 입력 이벤트와 폼 제출 이벤트를 처리하는 방법을 학습합니다.
- **구조 분해 할당:** ES6 구조 분해 할당 문법과 그 필요성을 이해합니다.

## #3.6 Themes (08:42)
- **타입 스타일드 컴포넌트 설치:** TypeScript와 styled-components를 함께 사용하기 위해 `@types/styled-components` 패키지를 설치합니다.
- **테마 인터페이스 정의:** `styled.d.ts` 파일에서 테마 객체의 타입을 정의합니다.
- **테마 설정:** `theme.ts` 파일에서 다크 모드와 라이트 모드 테마를 정의합니다.
- **테마 토글 기능:** 상태와 버튼을 사용하여 다크 모드와 라이트 모드를 전환하는 기능을 구현합니다.

## SyntheticEvent (합성 이벤트)
- **합성 이벤트:** 모든 브라우저에서 이벤트를 동일하게 처리하기 위한 이벤트 래퍼 SyntheticEvent 객체를 전달받습니다.
- **이벤트 종류:** Keyboard Events (onKeyDown, onKeyPress, onKeyUp), Focus Events (onFocus, onBlur), Form Events (onChange, onInput, onInvalid, onReset, onSubmit), Generic Events (onError, onLoad) 등 다양한 이벤트를 다룹니다.

[React SyntheticEvent 공식 문서](https://reactjs.org/docs/events.html)


#5 CRYPTO TRACKER

## #5.0 Setup (09:54)

### 주요 내용:
- React Router 설치: `npm i react-router-dom@5.3.0`
- React Query 사용 이유: 데이터 문제를 해결하기 위해
- 프로젝트 설계: 두 개의 스크린 - 모든 코인 목록(홈) / 각각의 코인 디테일 화면

### 라우터의 역할:
- **BrowserRouter:** 앱의 라우팅을 설정하는 컨테이너 컴포넌트
- **Switch:** 첫 번째로 매칭되는 라우트를 렌더링
- **Route:** URL 경로와 일치하는 컴포넌트를 렌더링

### useParams 설명:
- **useParams:** URL의 동적 파라미터를 추출하는 훅으로, 특정 경로의 파라미터를 가져오는 데 사용됩니다.

### 코드 예시

#### package.json

```json
{
  "name": "react-masterclass",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "@types/jest": "^27.0.2",
    "@types/node": "^16.11.1",
    "@types/react": "^17.0.30",
    "@types/react-dom": "^17.0.9",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-query": "^3.27.0",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "styled-components": "^5.3.1",
    "styled-reset": "^4.3.4",
    "typescript": "^4.4.4",
    "web-vitals": "^1.1.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@types/react-query": "^1.2.9",
    "@types/react-router-dom": "^5.3.1",
    "@types/styled-components": "^5.1.15"
  }
}
```

#### src/App.tsx

```typescript
import Router from "./Router";

// App 컴포넌트: 라우터 컴포넌트를 렌더링합니다.
function App() {
  return <Router />;
}

export default App;
```

#### src/Router.tsx

```typescript
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

// Router 컴포넌트: 앱의 라우팅을 설정합니다.
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* URL이 /:coinId와 일치할 때 Coin 컴포넌트를 렌더링 */}
        <Route path="/:coinId">
          <Coin />
        </Route>
        {/* 기본 경로(/)와 일치할 때 Coins 컴포넌트를 렌더링 */}
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
```

#### src/index.tsx

```typescript
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";

// index.tsx: 애플리케이션의 루트 컴포넌트를 렌더링합니다.
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

#### src/routes/Coin.tsx

```typescript
import { useParams } from "react-router";

// RouteParams 인터페이스: URL 파라미터 타입 정의
interface RouteParams {
  coinId: string;
}

// Coin 컴포넌트: URL 파라미터에서 coinId를 추출하고 렌더링합니다.
function Coin() {
  const { coinId } = useParams<RouteParams>();
  return <h1>Coin: {coinId}</h1>;
}
export default Coin;
```

#### src/routes/Coins.tsx

```typescript
// Coins 컴포넌트: 모든 코인을 보여주는 컴포넌트입니다.
function Coins() {
  return <h1>Coins</h1>;
}
export default Coins;
```

#### src/theme.ts

```typescript
import { DefaultTheme } from "styled-components";

// 테마 정의: 기본 테마 설정
export const theme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
  btnColor: "tomato",
};
```

### 커밋 메시지

```
#5.0 Setup (09:54)

feat: Setup initial project structure for CRYPTO TRACKER

- Installed React Router and React Query
- Added basic routing for home and coin detail screens
- Implemented theme setup with styled-components
```


## #5.1 Styles (09:44)

### 주요 내용:
- **Reset CSS:** 브라우저 기본 스타일을 초기화하여 일관된 스타일을 적용할 수 있게 합니다.
- **Global Styles:** `createGlobalStyle`을 사용하여 전체 문서에 공통 스타일을 적용합니다.
- **Fragment:** 여러 요소를 그룹화하지만 DOM에 추가 요소를 만들지 않는 유령 컴포넌트입니다.
- **폰트 사용:** `@import`를 사용하여 외부 폰트를 가져옵니다.
- **Flat UI Color:** 색상 팔레트를 제공하는 사이트로, 다양한 색상 조합을 쉽게 찾을 수 있습니다. [Flat UI Colors](https://flatuicolors.com/palette/gb)

### 코드 예시

#### src/App.tsx

```typescript
import { createGlobalStyle } from "styled-components";
import Router from "./Router";

// GlobalStyle 컴포넌트: 글로벌 스타일을 정의합니다.
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
}
a {
  text-decoration:none;
}
`;

// App 컴포넌트: 글로벌 스타일과 라우터를 렌더링합니다.
function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
```

#### src/routes/Coins.tsx

```typescript
import styled from "styled-components";

// Title 컴포넌트: 테마에 따라 색상을 설정합니다.
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

// Coins 컴포넌트: 제목을 렌더링합니다.
function Coins() {
  return <Title>코인</Title>;
}

export default Coins;
```

#### src/styled.d.ts

```typescript
import "styled-components";

// DefaultTheme 인터페이스: 테마 속성을 정의합니다.
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
```

#### src/theme.ts

```typescript
import { DefaultTheme } from "styled-components";

// 테마 정의: 기본 테마 설정
export const theme: DefaultTheme = {
  bgColor: "#2f3640",
  textColor: "#f5f6fa",
  accentColor: "#4cd137",
};
```

### 설명

- **Reset CSS:** 다양한 브라우저에서 기본 스타일을 초기화하여 일관된 스타일을 적용합니다. 모든 요소의 기본 마진, 패딩 등을 제거합니다.
- **Global Styles:** `createGlobalStyle`을 사용하여 전체 문서에 공통 스타일을 적용합니다. 여기서 폰트, 배경색, 텍스트 색상 등을 설정할 수 있습니다.
- **Fragment:** 여러 요소를 그룹화하지만, DOM에 추가 요소를 만들지 않는 유령 컴포넌트입니다. 불필요한 요소를 피하기 위해 사용됩니다.
- **폰트 사용:** `@import`를 사용하여 외부 폰트를 가져와 사용할 수 있습니다. 예시에서는 Google Fonts의 'Source Sans Pro' 폰트를 사용합니다.
- **Flat UI Colors:** 색상 팔레트를 제공하는 사이트로, 다양한 색상 조합을 쉽게 찾을 수 있습니다. [Flat UI Colors](https://flatuicolors.com/palette/gb)

### 커밋 메시지

```
#5.1 Styles (09:44)

feat: Add global styles and theme setup for CRYPTO TRACKER

- Implemented reset CSS using createGlobalStyle
- Applied global styles to the entire document
- Added theme colors and setup theme provider
- Utilized Fragment to group elements without adding extra nodes to the DOM
```


## #5.1 Styles (09:44)

### 주요 내용:
- **Reset CSS:** 브라우저 기본 스타일을 초기화하여 일관된 스타일을 적용할 수 있게 합니다.
- **Global Styles:** `createGlobalStyle`을 사용하여 전체 문서에 공통 스타일을 적용합니다.
- **Fragment:** 여러 요소를 그룹화하지만 DOM에 추가 요소를 만들지 않는 유령 컴포넌트입니다.
- **폰트 사용:** `@import`를 사용하여 외부 폰트를 가져옵니다.
- **Flat UI Colors:** 색상 팔레트를 제공하는 사이트로, 다양한 색상 조합을 쉽게 찾을 수 있습니다. [Flat UI Colors](https://flatuicolors.com/palette/gb)

## #5.2 Home part One (09:25)

### 주요 내용:
- **홈 화면 스타일 지정:** 홈 화면에 대한 스타일을 지정하고, 글로벌 스타일과 테마 색상을 적용합니다.
- **코인 데이터:** 코인 목록을 보여주는 화면을 구현합니다.
- **API 사용:** [CoinPaprika](https://api.coinpaprika.com/v1/coins) API를 사용하여 코인 데이터를 가져옵니다.

### 세부 내용

- **Reset CSS:** 브라우저 기본 스타일을 초기화하여 모든 요소의 기본 마진과 패딩을 제거하고 일관된 스타일을 적용합니다.
- **Global Styles:** `createGlobalStyle`을 사용하여 전체 문서에 적용할 글로벌 스타일을 정의합니다. 예를 들어, 폰트, 배경색, 텍스트 색상 등을 설정할 수 있습니다.
- **Fragment:** 여러 요소를 그룹화하지만 DOM에 추가 요소를 만들지 않는 유령 컴포넌트로, 불필요한 요소를 피하기 위해 사용됩니다.
- **폰트 사용:** `@import`를 사용하여 Google Fonts의 'Source Sans Pro' 폰트를 가져와 사용할 수 있습니다.
- **Flat UI Colors:** 색상 팔레트를 제공하는 사이트로, 다양한 색상 조합을 쉽게 찾을 수 있습니다. [Flat UI Colors](https://flatuicolors.com/palette/gb)
- **코인 데이터:** [CoinPaprika](https://api.coinpaprika.com/v1/coins) API를 사용하여 코인 데이터를 가져옵니다.

### React Router 사용
- **Link 컴포넌트:** `Link`는 `a` 태그와 달리 페이지를 새로고침하지 않고 클라이언트 측 라우팅을 통해 페이지를 전환합니다. 이는 애플리케이션의 퍼포먼스를 향상시킵니다.
- **display: block:** 링크를 블록 요소로 만들어 전체 영역을 클릭할 수 있게 합니다.
- **화살표 표기:** `&rarr;`를 사용하여 오른쪽 화살표(→)를 표시합니다.

### map 함수
- **map 함수:** 배열의 각 요소를 변환하여 새로운 배열을 생성하는 함수입니다. 여기서는 코인 목록을 렌더링하는 데 사용됩니다.

### 코드 예시

#### src/App.tsx

```typescript
import { createGlobalStyle } from "styled-components";
import Router from "./Router";

// GlobalStyle 컴포넌트: 글로벌 스타일을 정의합니다.
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, section {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
}
a {
  text-decoration:none;
  color:inherit;
}
`;

// App 컴포넌트: 글로벌 스타일과 라우터를 렌더링합니다.
function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
```

#### src/routes/Coins.tsx

```typescript
import { Link } from "react-router-dom";
import styled from "styled-components";

// Container 컴포넌트: 전체 컨테이너 스타일을 정의합니다.
const Container = styled.div`
  padding: 0px 20px;
`;

// Header 컴포넌트: 헤더 스타일을 정의합니다.
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// CoinsList 컴포넌트: 코인 목록 스타일을 정의합니다.
const CoinsList = styled.ul``;

// Coin 컴포넌트: 각 코인 항목의 스타일을 정의합니다.
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block; /* 링크를 블록 요소로 만들어 전체 영역을 클릭할 수 있게 함 */
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

// Title 컴포넌트: 제목 스타일을 정의합니다.
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

// 코인 데이터 배열
const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
];

// Coins 컴포넌트: 코인 목록을 렌더링합니다.
function Coins() {
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  );
}
export default Coins;
```

#### src/theme.ts

```typescript
import { DefaultTheme } from "styled-components";

// 테마 정의: 기본 테마 설정
export const theme: DefaultTheme = {
  bgColor: "#2f3640",
  textColor: "#f5f6fa",
  accentColor: "#9c88ff",
};
```

### 커밋 메시지

```
#5.2 Home part One (09:25)

feat: Style home screen and add coin list

- Applied global styles and theme colors
- Styled home screen components
- Used map function to render coin list
- Implemented Link component for client-side routing
```


## #5.3 Home part Two (09:47)

### 주요 내용:
- **API 데이터 Fetch:** 외부 API로부터 데이터를 가져오는 방법
- **인터페이스 설정:** 데이터 구조를 정의하는 인터페이스 설정
- **useState:** 상태 관리를 위한 훅, 명시적 타입 설정
- **useEffect:** 컴포넌트의 생명주기 동안 특정 시점에 실행할 코드를 설정하는 훅
- **async/await:** 비동기 작업을 동기식 코드처럼 작성하는 방법
- **slice 메소드:** 배열의 일부분을 잘라내는 메소드
- **로딩 상태:** 데이터 로딩 중 상태를 관리

### 코드 예시

#### src/routes/Coins.tsx

```typescript
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 스타일 정의
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

// CoinInterface 인터페이스 정의: 코인 데이터의 구조를 정의합니다.
interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

// Coins 컴포넌트
function Coins() {
  // useState 훅으로 상태를 관리합니다. CoinInterface 배열과 로딩 상태를 관리합니다.
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect 훅: 컴포넌트가 마운트될 때 API로부터 데이터를 Fetch합니다.
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      // slice 메소드를 사용하여 처음 100개의 코인 데이터만 가져옵니다.
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading ? (
        // 로딩 상태일 때 로더를 표시합니다.
        <Loader>Loading...</Loader>
      ) : (
        // 로딩이 완료되면 코인 목록을 표시합니다.
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              {/* Link 컴포넌트를 사용하여 클라이언트 사이드 라우팅을 구현합니다. */}
              <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
```

### 설명

- **API 데이터 Fetch:** `fetch` 함수를 사용하여 외부 API로부터 데이터를 가져옵니다.
- **인터페이스 설정:** `CoinInterface` 인터페이스를 사용하여 코인 데이터의 구조를 정의합니다.
- **useState:** 상태를 관리하기 위해 사용됩니다. 여기서는 코인 데이터와 로딩 상태를 관리합니다. 명시적 타입을 설정하여 상태의 타입을 명확히 합니다.
- **useEffect:** 컴포넌트가 마운트될 때 한 번 실행되며, API 호출을 통해 데이터를 Fetch합니다.
- **async/await:** 비동기 작업을 동기식 코드처럼 작성할 수 있게 합니다. `async` 함수 내에서 `await`를 사용하여 비동기 작업이 완료될 때까지 기다립니다.
- **slice 메소드:** 배열의 일부분을 잘라내어 새로운 배열을 반환합니다. 여기서는 처음 100개의 코인 데이터만 가져옵니다.
- **로딩 상태:** 데이터를 Fetch하는 동안 로딩 상태를 관리하여 사용자에게 로딩 중임을 표시합니다.

### 커밋 메시지

```
#5.3 Home part Two (09:47)

feat: Fetch coin data from API and display coin list

- Fetched coin data from CoinPaprika API
- Used useState to manage coin data and loading state
- Implemented useEffect for API call on component mount
- Added loading indicator and styled coin list
```

## #5.4 Route States (14:55)

### 주요 내용:
- **API 데이터 Fetch:** 외부 API로부터 데이터를 가져오는 방법
- **인터페이스 설정:** 데이터 구조를 정의하는 인터페이스 설정
- **useState:** 상태 관리를 위한 훅, 명시적 타입 설정
- **useEffect:** 컴포넌트의 생명주기 동안 특정 시점에 실행할 코드를 설정하는 훅
- **async/await:** 비동기 작업을 동기식 코드처럼 작성하는 방법
- **slice 메소드:** 배열의 일부분을 잘라내는 메소드
- **로딩 상태:** 데이터 로딩 중 상태를 관리

### 코드 예시

src/routes/Coin.tsx

```typescript
import { useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

// 스타일 정의
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// RouteParams 인터페이스 정의: URL 파라미터의 타입을 정의합니다.
interface RouteParams {
  coinId: string;
}

// RouteState 인터페이스 정의: 상태의 타입을 정의합니다.
interface RouteState {
  name: string;
}

// Coin 컴포넌트
function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
```

src/routes/Coins.tsx

```typescript
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 스타일 정의
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

// CoinInterface 인터페이스 정의: 코인 데이터의 구조를 정의합니다.
interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

// Coins 컴포넌트
function Coins() {
  // useState 훅으로 상태를 관리합니다. CoinInterface 배열과 로딩 상태를 관리합니다.
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect 훅: 컴포넌트가 마운트될 때 API로부터 데이터를 Fetch합니다.
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      // slice 메소드를 사용하여 처음 100개의 코인 데이터만 가져옵니다.
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading ? (
        // 로딩 상태일 때 로더를 표시합니다.
        <Loader>Loading...</Loader>
      ) : (
        // 로딩이 완료되면 코인 목록을 표시합니다.
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
```

### 설명

- **API 데이터 Fetch:** `fetch` 함수를 사용하여 외부 API로부터 데이터를 가져옵니다.
- **인터페이스 설정:** `CoinInterface` 인터페이스를 사용하여 코인 데이터의 구조를 정의합니다.
- **useState:** 상태를 관리하기 위해 사용됩니다. 여기서는 코인 데이터와 로딩 상태를 관리합니다. 명시적 타입을 설정하여 상태의 타입을 명확히 합니다.
- **useEffect:** 컴포넌트가 마운트될 때 한 번 실행되며, API 호출을 통해 데이터를 Fetch합니다.
- **async/await:** 비동기 작업을 동기식 코드처럼 작성할 수 있게 합니다. `async` 함수 내에서 `await`를 사용하여 비동기 작업이 완료될 때까지 기다립니다.
- **slice 메소드:** 배열의 일부분을 잘라내어 새로운 배열을 반환합니다. 여기서는 처음 100개의 코인 데이터만 가져옵니다.
- **로딩 상태:** 데이터를 Fetch하는 동안 로딩 상태를 관리하여 사용자에게 로딩 중임을 표시합니다.
- **이미지 링크:** 각 코인의 이미지를 `https://static.coinpaprika.com/coin/{coin.id}/logo.png`에서 가져옵니다.
- **Link 컴포넌트:** `Link`는 `a` 태그와 달리 페이지를 새로고침하지 않고 클라이언트 사이드 라우팅을 통해 페이지를 전환합니다. 이는 애플리케이션의 퍼포먼스를 향상시킵니다. React Router 버전에 따라 사용하는 방법이 다를 수 있습니다.
- **화면 전환 시 상태 전송:** Link 컴포넌트를 통해 다른 화면으로 전환할 때 상태(state)를 함께 보낼 수 있습니다. 홈 화면을 만들지 않으면 상태가 생성되지 않습니다. 

### 커밋 메시지

feat: Fetch coin data from API and display coin list with images

- Fetched coin data from CoinPaprika API
- Used useState to manage coin data and loading state
- Implemented useEffect for API call on component mount
- Added loading indicator and styled coin list
- Displayed coin images and passed state to detail page using Link component


## #5.5 Coin Data (07:47)

### 주요 내용:
- **API 데이터 Fetch:** 코인 정보를 외부 API에서 가져오는 방법 연습
- **리액트 쿼리:** 비동기 데이터 캡슐화 및 관리
- **비동기 처리:** 비동기 작업을 효율적으로 처리

### 코드 예시

src/routes/Coin.tsx

```typescript
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

// 스타일 정의
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// RouteParams 인터페이스 정의: URL 파라미터의 타입을 정의합니다.
interface RouteParams {
  coinId: string;
}

// RouteState 인터페이스 정의: 상태의 타입을 정의합니다.
interface RouteState {
  name: string;
}

// Coin 컴포넌트
function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});

  // useEffect 훅: 컴포넌트가 마운트될 때 API로부터 데이터를 Fetch합니다.
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false); // 데이터 로드 완료 후 로딩 상태 해제
    })();
  }, [coinId]);

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
```

### 설명

- **API 데이터 Fetch:** `fetch` 함수를 사용하여 외부 API로부터 코인 정보를 가져옵니다.
- **리액트 쿼리:** 비동기 데이터를 캡슐화하여 컴포넌트의 재사용성을 높이고 데이터 fetching 로직을 분리합니다.
- **비동기 처리:** `async/await`를 사용하여 비동기 작업을 동기식 코드처럼 작성할 수 있게 합니다. `async` 함수 내에서 `await`를 사용하여 비동기 작업이 완료될 때까지 기다립니다.
- **로딩 상태:** 데이터를 Fetch하는 동안 로딩 상태를 관리하여 사용자에게 로딩 중임을 표시합니다.

### 커밋 메시지

feat: Fetch coin data and display in Coin component

- Fetched coin data from CoinPaprika API
- Used useState to manage coin info and price info state
- Implemented useEffect for API call on component mount
- Added loading indicator and styled coin detail page
