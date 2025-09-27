import React from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const contextValue = React.useContext(UserContext);
    console.log("UserContext value:", contextValue); // Add this line

    const { setUser } = contextValue;


  return (
    <div className="border w-1/2 m-auto p-2">
      <div className="flex flex-col justify-center items-center text-white bg-slate-700 w-[80%] m-auto p-2">
        <div className="bg-amber-400 w-full py-1">
          <h1 className="text-lg font-bold">Login Form</h1>
        </div>
        <div className="flex flex-col m-auto w-full gap-2 pt-2">
          <input
            type="text"
                      placeholder="username"
                      value={username}
            name="username"
            className="outline px-2 rounded"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
                      placeholder="password"
                      value={password}
            name="password"
            className="outline px-2 rounded"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="bg-blue-400 font-black"
            onClick={() => {
                setUser(username)
                setUsername("")
                setPassword("")
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
