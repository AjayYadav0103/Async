import React from 'react';
import { Link, BrowserRouter as Router, Routes,Route } from 'react-router-dom'

const Routing = () => {
  return <Router> 
  <div>
      <nav>
          <ul>
              <li>
                   <Link to='/'>Home</Link>
              </li>
              <li>
                   <Link to='/about'>About</Link>
              </li>
              <li>
                   <Link to='/user'>User</Link>
              </li>
          </ul>
      </nav>
  </div>
  <Routes> 
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/user' element={<User/>}> </Route>
  </Routes>
  </Router>

function Home() {
    return <h1>Hello Home</h1>
}

function About() {
    return <h1>Hello About</h1>
}

function User() {
    return <h1>Hello User</h1>
}

};

export default Routing;
