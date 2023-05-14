import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const TodoApp = () => {

  const stateCount = useSelector((state) => state.counter.count);
  console.log('state count in Todo app',stateCount);


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
  const [editState, setEditState] = useState({
    editing: false,
    id: ""
  });

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

    const todoArrCopy = [...todoArr];
    const elemIndex = todoArrCopy.findIndex((elem) => elem.id === id);
    todoArrCopy.splice(elemIndex, 1);
    setTodoArr(todoArrCopy);
  };

  const onEditHandler = (elem) => {
    setEditState({
      editing: true,
      id: elem.id
    });
    setInput(elem.text);
  };

  const updateTodoHandler = () => {
    const todoArrCopy = [...todoArr];
    const elemIndex = todoArrCopy.findIndex((elem) => elem.id === editState.id);
    //Can also use splice
    // todoArrCopy.splice(elemIndex, 1, new elem);

    const newElem = {
      id: editState.id,
      text: input
    };
    todoArrCopy[elemIndex] = newElem;
    setTodoArr(todoArrCopy);
    setInput("");
    setEditState({
      editing: false,
      id: ""
    });
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
          {!editState.editing ? (
            <button
              className="btn btn-primary"
              onClick={() => onAddTodosHandler()}
            >
              Add Todo
            </button>
          ) : (
            <button
              className="btn btn-warning"
              onClick={() => updateTodoHandler()}
            >
              Update Todo
            </button>
          )}
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
              <button
                className="btn btn-info me-2"
                onClick={() => onEditHandler(elem)}
              >
                Edit
              </button>
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
