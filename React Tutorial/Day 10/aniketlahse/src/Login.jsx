import { useNavigate } from "react-router-dom";


function Login(){
    const navigate = useNavigate();

    function login(){
        alert("login successful");

        navigate("/dashboard",{replace:true});

    }
    return(
        <div>
            <h1>Login Page.......</h1>

            <button onClick={login}>login</button>
        </div>
    )
}


export default Login;
