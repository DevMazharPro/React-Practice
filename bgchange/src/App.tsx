import { useState } from 'react';
import './App.css'
function App() {
  const [color, setColor] = useState<string>('red');

  return (
      <main
        style={{ backgroundColor: color }}
        className="h-dvh transition-colors duration-200"
      >
        <h1 className="text-center mb-3">Change Background Color</h1>
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-6 py-3 shadow-xl text-lg font-medium ">
          <div className="flex gap-3 items-center justify-center">
            <button
              onClick={() => setColor("red")}
              className="rounded-xl text-white px-3 py-2"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="rounded-xl text-white px-3 py-2"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("Green")}
              className="rounded-xl text-white px-3 py-2"
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="rounded-xl text-white px-3 py-2"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("brown")}
              className="rounded-xl text-white px-3 py-2"
              style={{ backgroundColor: "brown" }}
            >
              Brown
            </button>
            <button
              onClick={() => setColor("pink")}
              className="bg-red-700 rounded-xl text-white px-3 py-2"
              style={{ backgroundColor: "Pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("Olive")}
              className="bg-red-700 rounded-xl text-white px-3 py-2"
              style={{ backgroundColor: "Olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("Purple")}
              className="bg-red-700 rounded-xl text-white px-3 py-2"
              style={{ backgroundColor: "Purple" }}
            >
            Purple  
            </button>
            <button
              onClick={() => setColor("Orange")}
              className="bg-red-700 rounded-xl text-white px-3 py-2"
              style={{ backgroundColor: "Orange" }}
            >
              Orange
            </button>
          </div>
        </div>
      </main>
  );
}

export default App
