import React, { useState, useEffect } from "react";

function AddTodoModal({ addTodo, editTodo, editingTodo, closeModal, resetEditingTodo }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text);
    }
  }, [editingTodo]);

  const handleSave = () => {
    if (editingTodo) {
      editTodo(editingTodo.id, text);
    } else {
      addTodo(text);
    }
    closeModal();
    resetEditingTodo();
  };

  const handleClose = () => {
    closeModal();
    resetEditingTodo();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">
          {editingTodo ? "Edit Todo" : "Add Todo"}
        </h2>
        <div className="flex flex-col">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="search-field" 
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="cancel-button ml-2 w-32" 
            >
              {editingTodo ? "Update" : "Save"}
            </button>
            <button
              onClick={handleClose}
              className="cancel-button ml-2 w-32" 
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodoModal;
