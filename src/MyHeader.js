import { useState } from "react";

const MyHeader = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([
    {
      id: "1",
      value: "밥먹기",
    },
    {
      id: "2",
      value: "코딩",
    },
  ]);

  const addToList = () => {
    setList((prevList) => {
      return [
        {
          id: list.length + 1 + "",
          value: inputValue,
        },
        ...prevList,
      ];
    });
    setInputValue("");
  };

  return (
    <>
      <header>헤더</header>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addToList}>추가추가</button>
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </>
  );
};

export default MyHeader;
