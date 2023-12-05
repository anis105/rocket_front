import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Todolist from "../../components/todolist/Todolist";
import "./Todo.scss";

const Todo = () => {
  return (
    <div className="Todo">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Todolist />
      </div>
    </div>
  );
};

export default Todo;
