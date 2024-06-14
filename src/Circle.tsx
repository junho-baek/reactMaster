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