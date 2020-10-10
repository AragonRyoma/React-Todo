import React from "react";

const TodoList = (props) => {
  return (
    <ul>
      {props.todo.map((item) => (
        <li onClick={() => props.toggle(item)}>
          {item.name} {item.completed ? "Done" : ""}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
