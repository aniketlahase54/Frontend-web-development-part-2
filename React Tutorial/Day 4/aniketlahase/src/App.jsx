import { useState } from "react";

function App(){
  // let name = "Aniket";

  const [name,changeName] = useState("aniket");

  const [count,setCount] = useState(0);

  const [reverseCount, setReverse] = useState(10);

  const [likes,setLike] = useState(0);

    function updateName(){
    changeName("Aniket Lahase")
    // console.log("function call");
    // name = "lahase";
    // console.log(name);
  }
  return(
    <div>
      <h1>Hiii...{name}</h1>
      {/* <button onClick={updateName}>change name</button> */}

      <button onClick={() => changeName("python")}>change name</button>

      <h1>count value : {count}</h1>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
    <br />
    <br />
    <h1>Reverse count value : {reverseCount}</h1>
      <button onClick={()=> setReverse(reverseCount - 1)}>Decreases</button>

      <br />
      <h1>like : {likes}</h1>
      <button onClick={()=> setLike(likes+1)}>like</button>
      <button onClick={()=> setLike(likes-1)}>Dislike</button>
      
    </div>
  )
}

export default App;