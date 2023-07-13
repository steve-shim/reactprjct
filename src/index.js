import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Greeting = () => {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
};

const Person = () => <h2>John doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
};

ReactDOM.render(<Greeting />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
