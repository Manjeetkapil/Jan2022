import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from './Components/Login';
import Home from './Components/Home';
import Registration from './Components/Registration';
import Logout from "./Components/Logout";
function App() {
  return (
      <Router>
      <div>
        <nav className='nav'>
          <ul className='list'>
            <li className='listitem'>
              <Link className='button' to="/">Home</Link>
            </li>
            <li className='listitem'>
              <Link className='button' to="/login">Login</Link>
            </li>
            <li className='listitem'>
              <Link className='button' to="/registration">Registration</Link>
            </li>
            <li className='listitem'>
            <Logout/>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/registration" element={<Registration/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
