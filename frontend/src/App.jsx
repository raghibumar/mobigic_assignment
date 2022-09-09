import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {

  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
/* 
backend url:- https://login-username.herokuapp.com/
*/