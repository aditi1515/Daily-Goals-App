import React from "react";

export const Task = ({ title, description, deleteFunction, index }) => {
  return (
    <div className="task">
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <button onClick={() => deleteFunction(index)}>-</button>
    </div>
  );
};
