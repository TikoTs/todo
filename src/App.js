import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodoModal from "./components/AddTodoModal";
import "./styles/styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Reset the editingTodo to null when closing the modal
  const resetEditingTodo = () => {
    setEditingTodo(null);
  };

  return (
    <div className="App dark:bg-gray-900 dark:text-white">
      <Header />
      <TodoList
        todos={todos}
        toggleCompletion={toggleCompletion}
        deleteTodo={deleteTodo}
        setEditingTodo={setEditingTodo}
        setIsModalOpen={setIsModalOpen}
      />
      {isModalOpen && (
        <AddTodoModal
          addTodo={addTodo}
          editTodo={editTodo}
          editingTodo={editingTodo}
          closeModal={() => setIsModalOpen(false)}
          resetEditingTodo={resetEditingTodo} // Pass reset function to modal
        />
      )}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg"
      >
        +
      </button>
    </div>
  );
}

export default App;
