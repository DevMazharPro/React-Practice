import React from "react";

const UserContext = React.createContext({
  user: null,
  setUser: (user: any) => {}, // Provide a default, no-op function
});

export default UserContext;
