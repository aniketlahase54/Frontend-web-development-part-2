import { useState } from "react";

const User=()=>{
    const[show,setShow] = useState(false)
    return(
        <div>
            <h1>user conponests</h1>
            <input type={show ? "text":"password"} placeholder="Enter Password......" />

            <button onClick={()=>setShow(!show)}>{show ? "Hide":"Show"}</button>
        </div>
    )
}

export default User;