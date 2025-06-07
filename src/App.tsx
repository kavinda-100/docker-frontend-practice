import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", fontSize: "20px" }}>
          This is a react app with Vite and TypeScript for docker practice
          <br />
          with docker volumes update on live.
        </h1>
      </div>
      <div
        className="card"
        style={{
          width: "100%",
        }}
      >
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{
            width: "100%",
            height: "100%",
            fontSize: "20px",
            backgroundColor: "#61dafb",
            border: "none",
            borderRadius: "5px",
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
