import { useState } from "react";
function App(){
  const [name,setName] = useState("Aniket")
  return(
    <div>
      <h1>App components</h1>
      <h2>{name}</h2>
      <button onClick={()=>setName("Rahul")}>change name</button>
    </div>
  )
}

export default App;
