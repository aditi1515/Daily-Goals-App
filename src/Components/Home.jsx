import React, { useState,useEffect } from "react";
import { Task } from "./Task";
export const Home = () => {
  const alreadyFilledArray = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
  const [tasks, setTask] = useState(alreadyFilledArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler =  (e) => {
    e.preventDefault();
    setTask([...tasks, { title, description }]);
      setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const filterArray = tasks.filter((task, i ) =>  i != index);
    setTask(filterArray)
  }
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));

  }, [tasks])
  
  return (
    <div className="container">
      <h1>Daily Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      {tasks.map((task, index) => (
        <Task key={index} title={task.title} description={task.description} deleteFunction = {deleteTask} index = {index} />
      ))}
    </div>
  );
};
