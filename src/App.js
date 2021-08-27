import Nav from './components/Nav'
import NavChats from './components/NavChats'
import Home from './routes/Home'
// import SearchJob from './routes/SearchJob'
import NavTop from './components/NavTop'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './style.css'
function App () {
  return (
    <Router>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2'>
            <Nav />
          </div>
          <div className='col-8 content'>
            <div className='row'>
              <div className='col'>
                <NavTop />
              </div>
            </div>
            <div className='row contentPage'>
              <div className='col'>
                <Route path='/' exact component={Home} />
              </div>
            </div>
          </div>
          <div className='col-2 d-flex justify-content-end colNavChat'>
            {/* <NavChats /> */}
          </div>
        </div>
        {/* <Route path="/" exact component={Home}/>  */}
        {/* <Route path="/searchJob" component={SearchJob}/> */}
      </div>
    </Router>
  )
}

export default App
