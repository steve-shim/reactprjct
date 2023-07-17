import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const title = "메타인지의 힘";
const author = "Amelia Hepworth";
const img = "https://image.yes24.com/goods/74602725/L";

const BookList = () => {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="ramdom title" number={22} />
    </section>
  );
};

const Book = (props) => {
  console.log("props", props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
