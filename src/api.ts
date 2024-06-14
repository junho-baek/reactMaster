// API 요청 함수를 분리하여 재사용성을 높입니다.
export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}