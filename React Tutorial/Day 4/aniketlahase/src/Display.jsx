import { useState } from "react";

function Display(){
    const [dark,setDark] = useState(false)
    return(
        <div style={{
            backgroundColor:dark? "black":"white",
            color:dark? "white":"black",
            height:"100vh",


        }}>
            <h1>dispaly components</h1>
            <button onClick={()=>setDark(!dark)}>Toggle</button>
        </div>
    )
}

export default Display;