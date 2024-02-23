import React, { useState } from "react";

export default function SearchInput({ onSearch }) {
  const [input, setInput] = useState("");
  const darkMode = false;
  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div
          className={`search ${
            darkMode ? "dark-background" : "light-background"
          }  `}
        >
          <input
            className={`${darkMode ? "dark-background" : "light-background"}`}
            type="text"
            placeholder="Search for a Country..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}
