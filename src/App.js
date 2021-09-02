import Nav from './components/Nav'
import NavChats from './components/NavChats'
import Home from './routes/Home'
// import SearchJob from './routes/SearchJob'
import NavTop from './components/NavTop'
import NavMobile from './components/NavMobile'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './style.css'
function App() {

  const btnActive = () => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
    let colNav = document.querySelector(".colNav");

    if (sidebar.className !== "sidebar active") {
      colNav.className = "col-2 colNav";
    } else {
      colNav.className = "col-3 colNav desktopStyle";
    }
  }

  return (
    <Router>
      <div className='container-fluid'>
        <div className='row mainDiv'>
          <div className='col-3 colNav desktopStyle'>
            <Nav btnActiveFunction={btnActive} />
          </div>
          <div className='col-8 content'>
            <div className='row'>
              <div className='col desktopStyle'>
                <NavTop />
              </div>
              <div className="col mobileStyle">
                <NavMobile />

              </div>
            </div>
            <div className='row contentPage'>
              <div className='col'>
                <Route path='/' exact component={Home} />
              </div>
            </div>
          </div>
          <div className='col-2 d-flex justify-content-end colNavChat desktopStyle'>
            <NavChats />
          </div>
        </div>
        {/* <Route path="/" exact component={Home}/>  */}
        {/* <Route path="/searchJob" component={SearchJob}/> */}
      </div>
    </Router>
  )
}

export default App
