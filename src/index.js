import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const firstBook = {
  img: "https://image.yes24.com/goods/74602725/L",
  title: "메타인지의 힘",
  author: "Amelia Hepworth",
};

const secondBook = {
  img: "https://image.yes24.com/goods/119812251/XL",
  title: "울게되는 한국사",
  author: "김재원",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
};

const Book = ({ img, title, author }) => {
  // setting props directly
  //const { img, title, author } = props; // using deconstruction
  return (
    <article className="book">
      <img src={img} width={250} height={250} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
