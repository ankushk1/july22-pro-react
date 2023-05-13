import React, { useState } from "react";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [todoArr, setTodoArr] = useState([
    {
      id: crypto.randomUUID(),
      text: "Todo 1"
    },
    {
      id: crypto.randomUUID(),
      text: "Todo 2"
    }
  ]);

  const onAddTodosHandler = () => {
    if (!input) return;

    // const todoArrCopy = [...todoArr]
    // todoArrCopy.push({
    //   id: crypto.randomUUID(),
    //   text: input
    // })

    // setTodoArr(todoArrCopy)
    setTodoArr([
      ...todoArr,
      {
        id: crypto.randomUUID(),
        text: input
      }
    ]);
    setInput("");
  };

  const onDeleteHandler = (id) => {
    // How to delete from array
    // const filteredArr = todoArr.filter((elem) => elem.id !== id);
    // setTodoArr(filteredArr);

    const todoArrCopy = [...todoArr]
    const elemIndex = todoArrCopy.findIndex(elem => elem.id === id)
    todoArrCopy.splice(elemIndex, 1);
    setTodoArr(todoArrCopy);
  };

  return (
    <div className="container text-center">
      <div className="fs-2 mt-3">TodoApp</div>
      <div className="mt-3 row justify-content-center">
        <input
          type="text"
          className="form-control w-50 col-10"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="col-2">
          <button
            className="btn btn-primary"
            onClick={() => onAddTodosHandler()}
          >
            Add Todo
          </button>
        </div>
      </div>

      <div className="mt-4">
        {todoArr.map((elem, index) => (
          <div
            key={index}
            className="row justify-content-center text-start mx-5"
          >
            <h3 className="offset-1 col-8">{elem.text}</h3>
            <div className="col-3">
              <button className="btn btn-info me-2">Edit</button>
              <button
                className="btn btn-danger"
                onClick={() => onDeleteHandler(elem.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
