import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes,Route,Link } from "react-router-dom"; 

function App() {
  return (
    <>

    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "50px",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
        }}
      >
        <h2 style={{color:"white"}}>My Application</h2>
      </div>

      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
          color:"white",
        }}>

        <Link style={{color:"white", textDecoration:"none",margin:"5px" }} to="/" >Home</Link>

        <Link style={{color:"white", textDecoration:"none",margin:"5px"}} to="/about" >About</Link>

        <Link style={{color:"white", textDecoration:"none",margin:"5px"}} to="/contact" >Contact</Link>

        <Link style={{color:"white", textDecoration:"none",margin:"5px"}} to="/login" >Login</Link>

      </div>
    </div>

    <Routes>
      <Route path="/" element ={<Home/>}> </Route>
      <Route path="/home" element ={<Home/>}> </Route>
      <Route path="/about" element ={<About/>}> </Route>
      <Route path="/login" element ={<Login/>}> </Route>
      <Route path="/contact" element ={<Contact/>}> </Route>
    </Routes>
    </>

  );
}

export default App;
