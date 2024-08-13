import { useState } from "react";

export const useTodo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const newTask = { ...task, id: Math.floor(Math.random() * 1000) };
    setTodos((prev) => [...prev, newTask]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };
  // todos = бул задачалардын баары
  // addTodo = бул жаны задача кошот
  // deleteTodo
  return { todos: todos, addTodo: addTodo, deleteTodo };
};
