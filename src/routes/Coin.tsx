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