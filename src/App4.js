import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const loginAlert = () => {
    alert(`환영합니다. ${inputRef.current.value}`);
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <header className="App-header">
        <input ref={inputRef} type="text" placeholder="id" />
        <button onClick={loginAlert}>Login</button>
      </header>
    </div>
  );
}

export default App;
