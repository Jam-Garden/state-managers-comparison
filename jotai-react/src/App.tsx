import { useAtom } from "jotai";
import { countValue, doubleValue } from "./store/Counter";

function App() {
  const [count, setCount] = useAtom(countValue);
  const [doubleCount] = useAtom(doubleValue);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: '10px'
      }}
    >
      <div>{count}</div>
      <div>double value: {doubleCount}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>decrease</button>
    </div>
  );
}

export default App;
