import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Notfound from "./Notfound";
import About from "./About";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Setting from "./Setting";

function App() {
  return (
    <div>
      <Link to="home">Home</Link>
      <Link to="about">About</Link>
      <Link to="dashboard">Dashboard</Link>

      <Link to="home">Home</Link>
      <Link to="home">Home</Link>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Home />} />

        <Route path="*" element={<Notfound />} />

        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile/>}/>
        <Route path="setting" element={<Setting/>}/>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
