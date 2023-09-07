import React from "react";

const TodoList = ({ todo, setTodo, setEditTodo }) => {
  const handleComplete = (todoItem) => {
    setTodo(
      todo.map((item) => {
        if (item.id === todoItem.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todo.find((todoItem) => todoItem.id === id);
    setEditTodo(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodo(todo.filter((todoItem) => todoItem.id !== id));
  };
  return (
    <div>
      {todo.map((todoItem) => (
        <li className="list-item" key={todoItem.id}>
          <input
            type="text"
            value={todoItem.title}
            className={`list ${todoItem.completed ? "complete":""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todoItem)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todoItem)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todoItem)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
