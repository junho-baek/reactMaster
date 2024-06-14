import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

// Router 컴포넌트: 앱의 라우팅을 설정합니다.
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* URL이 /:coinId와 일치할 때 Coin 컴포넌트를 렌더링 */}
        <Route path="/:coinId">
          <Coin />
        </Route>
        {/* 기본 경로(/)와 일치할 때 Coins 컴포넌트를 렌더링 */}
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;