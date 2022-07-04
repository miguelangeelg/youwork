  import Nav from "./components/navs/Nav";
  import NavChats from "./components/navs/NavChats";
  import Home from "./pages/home/Home";
  import SearchJob from "./pages/searchJob/SearchJob";
  import NavTop from "./components/navs/NavTop";
  import NavMobile from "./components/navs/NavMobile";
  import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
  } from "react-router-dom";
  import "primereact/resources/themes/saga-blue/theme.css";
  import "primereact/resources/primereact.min.css";
  import "primeicons/primeicons.css";
  import { useState, useEffect } from "react";
  import { GlobalStyles, lightTheme, darkTheme } from "./Theme";
  import styled, { ThemeProvider } from "styled-components";
  import "./style.css";
  import Login from "./pages/login/Login";

  const StyledApp = styled.div``;

  function App() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
      if (localStorage.getItem("theme") === "dark") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }, []);

    const themeToggle = () => {
      if (theme === "light") {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setTheme("light");
        localStorage.setItem("theme", "light");
      }
    };

    const btnActive = () => {
      let sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("active");
      let colNav = document.querySelector(".colNav");

      if (sidebar.className !== "componentTheme sidebar active") {
        colNav.className = "col-2 colNav";
      } else {
        colNav.className = "col-3 colNav desktopStyle";
      }
    };

    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <Router>
            <Switch>
              <div className="container-fluid">
                <Route path="/login" component={Login} />
                { path != "login" ? (
                  <div className="row mainDiv">
                    <div className="col-3 colNav desktopStyle">
                      <Nav btnActiveFunction={btnActive} />
                    </div>
                    <div className="col-8 content">
                      <div className="row">
                        <div className="col desktopStyle">
                          <NavTop theme={theme} setTheme={themeToggle} />
                        </div>
                        <div className="col mobileStyle">
                          <NavMobile theme={theme} setTheme={themeToggle} />
                        </div>
                      </div>
                      <div className="row contentPage" style={{ zIndex: 0 }}>
                        <div className="col">
                          <Route path="/" exact>
                            <Home />
                          </Route>
                          <Route path="/searchJob" component={SearchJob} />
                        </div>
                      </div>
                    </div>
                    <div className="col-2 d-flex justify-content-end colNavChat desktopStyle">
                      <NavChats />
                    </div>
                  </div>) : (<></>)
                }
                {/* <Route path="/" exact component={Home}/>  */}
              </div>
            </Switch>
          </Router>
        </StyledApp>
      </ThemeProvider>
    );
  }

  export default App;
