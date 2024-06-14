import { Link } from "react-router-dom";
import styled from "styled-components";

// Container 컴포넌트: 전체 컨테이너 스타일을 정의합니다.
const Container = styled.div`
  padding: 0px 20px;
`;

// Header 컴포넌트: 헤더 스타일을 정의합니다.
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// CoinsList 컴포넌트: 코인 목록 스타일을 정의합니다.
const CoinsList = styled.ul``;

// Coin 컴포넌트: 각 코인 항목의 스타일을 정의합니다.
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block; /* 링크를 블록 요소로 만들어 전체 영역을 클릭할 수 있게 함 */
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

// Title 컴포넌트: 제목 스타일을 정의합니다.
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

// 코인 데이터 배열
const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
];

// Coins 컴포넌트: 코인 목록을 렌더링합니다.
function Coins() {
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  );
}
export default Coins;