import React, {useState, useEffect} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home/Home";
import Nav from "../components/navs/Nav";
import NavChats from "../components/navs/NavChats";
import SearchJob from "../pages/searchJob/SearchJob";
import NavTop from "../components/navs/NavTop";
import NavMobile from "../components/navs/NavMobile";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export const DashboardRoutes = () => {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
      if (localStorage.getItem("theme") === "dark") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }, []);

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

      // const themeToggle = () => {
      //   if (theme === "light") {
      //     setTheme("dark");
      //     localStorage.setItem("theme", "dark");
      //   } else {
      //     setTheme("light");
      //     localStorage.setItem("theme", "light");
      //   }
      // };
  return (
    <>
      <div className="row mainDiv">
        <div className="col-3 colNav desktopStyle">
          <Nav btnActiveFunction={btnActive} />
        </div>
        <div className="col-8 content">
          <div className="row">
            <div className="col desktopStyle">
              <NavTop theme={theme} setTheme={()=>{}} />
            </div>
            <div className="col mobileStyle">
              <NavMobile theme={theme} setTheme={()=>{}} />
            </div>
          </div>
          <div className="row contentPage" style={{ zIndex: 0 }}>
            <div className="col">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/searchJob" component={SearchJob} />
                <Redirect to="/" />
              </Switch>
            </div>
          </div>
        </div>
        <div className="col-2 d-flex justify-content-end colNavChat desktopStyle">
          <NavChats />
        </div>
      </div>
    </>
  );
};
