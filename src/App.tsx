import Circle from "./Circle";

// App 컴포넌트: Circle 컴포넌트를 사용하여 배경색을 다르게 설정합니다.
function App() {
  return (
    <div>
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;