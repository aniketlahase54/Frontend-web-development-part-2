import { useState } from "react";
import Input from "./Input";

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
            <br />
            <br />
            <Input/>
        </div>
    )
}

export default Display;