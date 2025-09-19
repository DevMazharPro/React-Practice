import { useState } from "react";
import "./App.css";
import Password from "./password";
import TodoList from "./todo";
import Card from "./Card";

// Define BgChanger here. It accepts setColor as a prop.
const BgChanger = ({ setColor }: { setColor: (color: string) => void }) => {
  return (
    <div className="fixed bottom-12 inset-x-0 flex justify-center">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>
        <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>
        <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "black" }}
        >
          Black
        </button>
        <button
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg border"
          style={{ backgroundColor: "white" }}
        >
          White
        </button>
      </div>
    </div>
  );
};

function App() {
  const [counter, setCounter] = useState(0);
  // 1. Add state for managing the background color. Default is dark gray.
  const [color, setColor] = useState("#212121");

  const increaseCount = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("Counter cannot be more than 20");
    }
  };
  const decreaseCount = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Counter cannot be less than 0");
    }
  };
  const reset = () => {
    setCounter(0);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (!isNaN(value) && value >= 0 && value <= 20) {
      setCounter(value);
    } else {
      alert("Please enter a number between 0 and 20");
    }
  };

  return (
    // 2. Apply the color to the main div and ensure it fills the screen.
    <div
      className="w-full h-screen duration-200 p-4 text-white"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-2xl font-extrabold caret-amber-300">
        Hello Vite + React!
      </h1>
      <h2 className="text-xl">Counter: {counter}</h2>
      <div className="flex flex-col justify-center items-center md:flex-row gap-4">
        <input
          type="text"
          onChange={handleChange}
          className="border text-3xl text-black" // Make text black to be visible
        />
        <button
          onClick={increaseCount}
          className="border p-2 border-r-2 bg-yellow-200 text-black"
        >
          Increase
        </button>
        <button
          onClick={decreaseCount}
          className="border p-2 border-l-2 bg-green-200 text-black"
        >
          Decrease
        </button>
      </div>
      <button onClick={reset} className="bg-red-200 p-2 border mt-2 text-black">
        Reset
      </button>

      {/* These components will now render on the colored background */}
      <Password />
      <TodoList />
      <Card name="Mazhar Hussain" description="..."/>

      {/* 3. Pass the state setter function to the BgChanger component */}
      <BgChanger setColor={setColor} />
    </div>
  );
}

export default App;
