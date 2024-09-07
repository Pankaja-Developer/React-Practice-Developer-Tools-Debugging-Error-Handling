import { add, sub, mul, div } from "./Cal";

function App() {
  return (
    <>
      <ul>
        <li>{add(40, 5)}</li>
        <li>{sub(40, 5)}</li>
        <li>{mul(40, 5)}</li>
        <li>{div(40, 3)}</li>
      </ul>
    </>
  );
}

export default App;
