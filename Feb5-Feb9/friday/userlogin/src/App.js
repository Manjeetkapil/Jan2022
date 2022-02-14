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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
            <a
                  onClick={() => {
                    Logout();
                  }}
                >
                  Logout
                </a>
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
