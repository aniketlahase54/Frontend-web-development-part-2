import { useState } from "react";

function Test({username,pass,address}){
    // function update(){
    //     username="om";
    //     console.log("updated :",username);

    // }
    // update();

    const[name,setName] = useState(username);

    return(
        <div>
            <h1>test components</h1>
            <h2>username :{username}</h2>
            <h2>{pass}</h2>
            <h2>{address}</h2>
            <h2>name : {name}</h2>

            <button onClick={()=>setName("om")}>update name</button>

        </div>
    )
}


export default Test;