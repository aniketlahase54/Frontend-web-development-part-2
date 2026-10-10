import Login from "./Login";
import Navbar from "./assets/Navbar";
import User from "./User";

function App(){
  return(
    <div>
      <Navbar/>
      <h1 style={{color:"red",backgroundColor:"black",textAlign:"center"}}>Aniket Lahase</h1>
      <User/>
      <hr />
      <Login/>

    </div>
  )
}

export default App;