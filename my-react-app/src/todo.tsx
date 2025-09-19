import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const handleAddTodo = () => {
    if (input.trim() === "") return; 

    const newTodo: Todo = {
      id: Date.now(), 
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput(""); 
  };

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-purple-600 mt-6">To-Do List</h2>
      <input
        type="text"
        value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border p-2 mr-2 mt-2 rounded-2xl"
      />
      <button className="bg-blue-200 p-2 rounded-2xl text-xl font-bold" onClick={handleAddTodo}>Add To-Do</button>
      <ul className="mt-4 list-disc list-inside">
        {todos.map((todo) => (
          <li className="text-xl " key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
