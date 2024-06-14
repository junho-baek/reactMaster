import { useQuery } from "react-query";
import { fetchCoinTickers } from "../api";
import styled from "styled-components";

interface PriceProps {
  coinId: string;
}

interface IPriceData {
  quotes: {
    USD: {
      ath_price: number;
      market_cap: number;
      percent_change_24h: number;
      price: number;
      volume_24h: number;
    };
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PriceItem = styled.div`
  margin: 20px 0;
  font-size: 24px;
  color: ${(props) => props.theme.accentColor};
`;

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IPriceData>(["price", coinId], () =>
    fetchCoinTickers(coinId)
  );

  return (
    <Container>
      {isLoading ? (
        "Loading price..."
      ) : (
        <>
          <PriceItem>현재가: ${data?.quotes?.USD?.price.toFixed(2)}</PriceItem>
          <PriceItem>고가: ${data?.quotes?.USD?.ath_price.toFixed(2)}</PriceItem>
          <PriceItem>저가: ${data?.quotes?.USD?.percent_change_24h.toFixed(2)}</PriceItem>
        </>
      )}
    </Container>
  );
}

export default Price;