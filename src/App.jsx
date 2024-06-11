import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;


// 겹치는 부분을 Prop을 이용해서 변수 활용하기
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// 추가되는 부분은 styled()`(추가할 내용)` 활용하기
const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;