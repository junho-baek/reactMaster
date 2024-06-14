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