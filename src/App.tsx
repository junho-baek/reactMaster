import React, { useState } from "react";

function App() {
  // 입력값을 상태로 관리합니다. 초기값은 빈 문자열입니다.
  const [value, setValue] = useState("");

  // 입력값 변경 시 호출되는 함수입니다. 이벤트 객체에서 현재 타겟의 값을 추출합니다.
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //
    //const value = event.currentTarget.value; 와 동일하다. 
    const {
      currentTarget: { value },
    } = event;
    console.log(value);
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