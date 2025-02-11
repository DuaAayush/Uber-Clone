import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import Captiansignup from './pages/Captiansignup'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/Signup" element={<UserSignup/>} />
        <Route path="/captian-login" element={<Captainlogin/>} />
        <Route path="/captian-signup" element={<Captiansignup/>} />
        </Routes> 
    </div>
  )
}

export default App