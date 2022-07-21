import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./styles.css";
console.clear();
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1 className="title">ToDo - App</h1>
      <form
        htmlFor="todo"
        onSubmit={(event) => {
          event.preventDefault();
          setTodos([...todos, { name: inputValue, id: nanoid() }]);
          setInputValue("");
        }}
      >
        <input
          required
          type="text"
          id="todo"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />

        <button className="addButton">Add</button>
      </form>
      <ul className="todoUl">
        {todos.map((todo) => {
          return (
            <>
              <li className="todoLi" key={todo.id}>
                {todo.name}
                <button
                  type="button"
                  className="deleteButton"
                  onClick={() => {
                    setTodos(todos.filter((Item) => Item.id !== todo.id));
                  }}
                >
                  Delete
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
