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