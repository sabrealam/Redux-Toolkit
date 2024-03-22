import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { connect } from "react-redux";

function Todo() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(state);
  return (
    <div className="w-screen h-96  ">
      <div className=" h-88  border-2 p-12 shadow-lg  ">
        <input
          type="text"
          id="todo"
          placeholder="Add Todo"
          className="w-96 h-16 p-3 rounded-lg border-green-500 border-2 text-2xl"
        />
        <br />
        <br />
        <label htmlFor="in" className="text-2xl">
          Status :-{" "}
        </label>
        &emsp;
        <input type="checkbox" className="w-6 h-6" name="" id="in" />
        <br />
        <br />
        <button
          className="text-2xl border-2 border-green-500 p-3 rounded-lg w-36 h-13"
          onClick={() =>
            dispatch({
              type: "ADD_TODO",
              payload: {
                title: document.getElementById("todo").value,
                status: document.getElementById("in").checked,
              },
            })
          }
        >
          Add
        </button>
      </div>
    </div>
  );
}

function ShowTodo({ todo }) {
  // const todo1 = useSelector((state) => state);
  console.log(todo);
  return (
    <div className=" p-10  flex flex-wrap gap-8  ">
      {todo.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

function ToDo({ todo }) {
  return (
    <>
      <Todo />
      <ShowTodo todo={todo} />
    </>
  );
}
let mapStateToProps = (state) => ({
  todo: state,
});

export default connect(mapStateToProps)(ToDo);
