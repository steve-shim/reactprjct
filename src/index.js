import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Greeting = () => {
  return (
    <div>
      <h1>hello world!!</h1>
    </div>
  );
};

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

ReactDOM.render(<Greeting />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
