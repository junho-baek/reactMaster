// 애니메이션을 추가하고 싶으면 키프레임스를 불러와야한다.
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

//키프레임을 설정하는 방법도 스타일 컴포넌트 설정하는 것과 동일하게 ``을 이용해서 설정한다.
const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;


const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 애니메이션은 이렇게 설정 */
  animation: ${rotationAnimation} 1s linear infinite;

  /* 이 컴포넌트 안에 위치한 span의 css를 바꾸고 싶다면 아래와 같이 쓰면 된다. */
  span {
    font-size: 36px;
    /* &는 중괄호 바깥의 span:hover와 동일함. css 중괄호 안에서 기본적인 사항들을 적용할 수 있기 때문에 좀 더 직관적인듯 */
    &:hover {
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>🤩</span>
      </Box>
    </Wrapper>
  );
}

export default App;