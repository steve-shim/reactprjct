import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const books = [
  {
    id: 1,
    img: "https://image.yes24.com/goods/74602725/L",
    title: "메타인지의 힘",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img: "https://image.yes24.com/goods/119812251/XL",
    title: "울게되는 한국사",
    author: "김재원",
  },
];

// 객체를 map을 활용하여 렌더링하는 방법
// const names = ["john", "peter", "susan"];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        //const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

const Book = (props) => {
  // setting props directly
  const { img, title, author, children } = props; // using deconstruction

  const clickHandler = (e) => {
    console.log("e.target", e.target);
    console.log("e.target.value", e.target.value);
    alert("hello world!");
  };
  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(`제목은 ${title}`);
      }}
    >
      <img src={img} width={250} height={250} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
      <button type="button" value={100} onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        reference example
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
