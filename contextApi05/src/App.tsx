import UserContext from "./context/UserContext";
import Login from "./components/Login";
import { useState } from "react";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState(null); // Or your initial user state

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Login />
      <Profile />
      {/* Other components that need access to the user context */}
    </UserContext.Provider>
  );
}

export default App;
