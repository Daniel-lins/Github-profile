import React from "react";
import GlobalStyle from "./styles/global";
import { Router } from "./routes";
// import { Home } from "./pages/Home";
import { UserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <div>
      <GlobalStyle />
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </div>
  );
}

export default App;
