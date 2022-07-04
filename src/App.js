import { useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { useEffect, useState } from "react";
import { GlobalStyles, lightTheme, darkTheme } from "./Theme";
import styled, { ThemeProvider } from "styled-components";
import AppRouter from "./routes/AppRouter";
import "./style.css";
const StyledApp = styled.div``;

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;