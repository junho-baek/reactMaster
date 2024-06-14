import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

// 스타일 정의
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// RouteParams 인터페이스 정의: URL 파라미터의 타입을 정의합니다.
interface RouteParams {
  coinId: string;
}

// RouteState 인터페이스 정의: 상태의 타입을 정의합니다.
interface RouteState {
  name: string;
}

// Coin 컴포넌트
function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});

  // useEffect 훅: 컴포넌트가 마운트될 때 API로부터 데이터를 Fetch합니다.
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false); // 데이터 로드 완료 후 로딩 상태 해제
    })();
  }, [coinId]);

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;