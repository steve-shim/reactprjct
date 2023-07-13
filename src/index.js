import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => (
  <article className="book">
    <Image></Image>
    <Title />
    <Author />
  </article>
);

const Image = () => (
  <img src="https://image.yes24.com/goods/74602725/L" alt="" />
);

const Title = () => <h1>메타인지의 힘</h1>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Amelia Hepworth
  </h4>
);

ReactDOM.render(<BookList />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
