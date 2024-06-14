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