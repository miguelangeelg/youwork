import Nav from './components/Nav'
import NavChats from './components/NavChats'
import Home from './routes/Home'
import SearchJob from './routes/SearchJob'
import NavTop from './components/NavTop'
import NavMobile from './components/NavMobile'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { useState, useEffect } from 'react';
import { GlobalStyles, lightTheme, darkTheme } from './Theme';
import styled, { ThemeProvider } from 'styled-components';
import './style.css'

const StyledApp = styled.div``;

function App() {

  const [theme, setTheme] = useState("light");


  useEffect(() => {
    if (sessionStorage.getItem("theme") === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [])

  const themeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
      sessionStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      sessionStorage.setItem("theme", "light");
    }
  }

  const btnActive = () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
    let colNav = document.querySelector(".colNav");

    if (sidebar.className !== "componentTheme sidebar active") {
      colNav.className = "col-2 colNav";
    } else {
      colNav.className = "col-3 colNav desktopStyle";
    }
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Router>
          <div className='container-fluid'>
            <div className='row mainDiv'>
              <div className='col-3 colNav desktopStyle'>
                <Nav btnActiveFunction={btnActive} />
              </div>
              <div className='col-8 content'>
                <div className='row'>
                  <div className='col desktopStyle'>
                    <NavTop theme={theme} setTheme={themeToggle} />
                  </div>
                  <div className="col mobileStyle">
                    <NavMobile theme={theme} setTheme={themeToggle} />

                  </div>
                </div>
                <div className='row contentPage' style={{ zIndex: 0 }}>
                  <div className='col'>
                    <Route path='/' exact component={Home} />
                    <Route path="/searchJob" component={SearchJob} />
                  </div>
                </div>
              </div>
              <div className='col-2 d-flex justify-content-end colNavChat desktopStyle'>
                <NavChats />
              </div>
            </div>
            {/* <Route path="/" exact component={Home}/>  */}
          </div>
        </Router>
      </StyledApp>
    </ThemeProvider>
  )
}


export default App
