import { useState } from "react";
import { add, remove, toggleCompleted } from "./features/todoSlice";
import { useAppSelector, useAppDispatch } from "./store";
import React from "react";

function App() {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);

  const onSave = () => {
    if (title) {
      dispatch(add(title));
      setTitle("");
    } else {
      alert("You must enter a title for your todo");
    }
  };

  const onDelete = (id: string) => {
    dispatch(remove(id));
  };

  const toggle = (id: string) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <div className="container p-5">
      <div className="input-group mx-3 container">
        <input
          name="title"
          title="title"
          onChange={(e) => setTitle(e.currentTarget.value)}
          className="form-control"
          placeholder="Todo"
        />
        <div className="input-group-append">
          <button className="btn mx-3 btn-outline-success" onClick={onSave}>
            Save
          </button>
        </div>
      </div>
      <div className="input-group-prepend">
        <ul className="list-group">
          {todos.map((todo) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={todo.id}
            >
              {" "}
              <div>
                <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={() => toggle(todo.id)}
                >
                  {todo.completed ? "Undone" : "Done"}
                </button>
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={() => onDelete(todo.id)}
                >
                  Delete
                </button>
              </div>
              <span>{todo.title}</span>{" "}
            </li>
          ))}
        </ul>{" "}
      </div>
    </div>
  );
}

export default App;
