import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_TODO, UPDATE_TODO } from "../reducers/actionTypes";
import { IoMdCloudDone } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
export default function Card({ todo }) {
  const dispatch = useDispatch();
  const del = () => {
    dispatch({
      type: DELETE_TODO,
      payload: {
        id: todo.id,
      },
    });
  };

  let update = () => {
    dispatch({
      type: UPDATE_TODO,
      payload: {
        id: todo.id,
        status: todo.status,
      },
    });
  };

  return (
    <div>
      <div className="block w-96 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div
          style={{
            width: "70px",
            height: "30px",
            backgroundColor: todo.status ? "green" : "red",
            color: "white",
            textAlign: "center",
            borderRadius: "5px",
            cursor: "pointer",
            display: "grid",
            placeItems: "center",
          }}
        >
          To Do
        </div>
        <br />
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {todo.title}
        </p>
        <div className="flex justify-between">
          <p>Status :- {todo.status.toString()} </p>
          {todo.status ? (
            <IoMdCloudDone
              size={30}
              color="green"
              cursor={"pointer"}
              title="Done"
            />
          ) : (
            <IoWarningOutline
              size={30}
              color="red"
              cursor={"pointer"}
              title="Not Done"
            />
          )}
        </div>
        <br />
        <button onClick={del}>Delete</button>&emsp;
        <button onClick={update}>Update</button>
      </div>
    </div>
  );
}
