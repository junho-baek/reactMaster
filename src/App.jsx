import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

// Input 컴포넌트에 모두 required 라는 속성을 추가시키고 싶다면 이렇게 코딩하면 된다.
const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function App() {
  return (
    // Father 컴포넌트를 html header 로 사용하는 방법 as 를 쓰면 된다. 버튼 컴포넌트를 a 태그로 바꾸고 싶으면 <Btn as="a"> 라고 쓰면 된다.
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;