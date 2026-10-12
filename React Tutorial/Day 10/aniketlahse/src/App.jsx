import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import Notfound from "./Notfound";
import About from "./About";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Setting from "./Setting";
import Login from "./Login";

function App() {
  const navigate = useNavigate();
  return (
    <div>

      





      {/* <div
        style={{
          width: "300px",
          height: "300px",
          border: "1px solid black",
          margin: "150px auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button onClick={()=>navigate("/dashboard")} style={{ height: "20px", position: "relative", top: "130px" }}>
          Go to Dashboard Page
        </button>
      </div> */}

      {/* <Link to="home">Home</Link>
      <Link to="about">About</Link>
      <Link to="dashboard">Dashboard</Link> */}

      

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Home />} />

        <Route path="*" element={<Notfound />} />

        <Route path="/about" element={<About />} />

         <Route path="/login" element={<Login />} />


        <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile/>}/>
        <Route path="setting" element={<Setting/>}/>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
