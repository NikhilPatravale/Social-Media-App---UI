import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import { AuthContext, AuthContextProvider } from "./context/AuthContext/AuthContext";
import { useContext } from "react";

function App() {
  const {user} = useContext(AuthContext)
  console.log(user)

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={ !user ? <Login /> : <Navigate to="/home" />} />
          <Route path="/profile/:userName" element={user ? <Profile /> : <Navigate to="/" />} />
          <Route path="/home" element={ user ? <Home /> : <Navigate to="/" /> } />
          <Route path="/register" element={ !user ? <Register /> : <Navigate to="/" />} />
        </Routes>
      </Router>
  );
}

export default App;
