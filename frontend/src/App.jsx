import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div className="min-h-screen bg-gradiant-to-br from gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 nb-8>Task Manager</h1>

        <form action="">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="What need to be done?"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
