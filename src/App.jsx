import styled, { keyframes } from "styled-components";

// Wrapper 컴포넌트: 화면을 꽉 채우고 중앙에 정렬해주는 컴포넌트입니다.
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

// rotationAnimation: 360도 회전하고, 둥글게 변했다가 다시 돌아오는 애니메이션을 정의합니다.
const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

// Emoji 컴포넌트: HTML 태그에 종속되지 않고 Pseudo Selectors를 사용할 수 있도록 만든 이모지 컴포넌트입니다.
const Emoji = styled.span`
  font-size: 36px;
`;

// Box 컴포넌트: 토마토 색상 배경에 회전 애니메이션을 적용한 박스 컴포넌트입니다.
// Box 내부의 Emoji 컴포넌트에 호버 효과를 적용하여 크기가 커지도록 설정합니다.
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

// App 컴포넌트: Wrapper 내부에 Box와 Emoji를 배치하여 화면에 표시합니다.
// Box 안에 있는 이모지와 밖에 있는 이모지의 동작 차이를 확인할 수 있습니다.
function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🤩</Emoji> {/* Box 안에 있는 이모지 */}
      </Box>
      <Emoji>🔥</Emoji> {/* Box 밖에 있는 이모지 */}
    </Wrapper>
  );
}

export default App;
