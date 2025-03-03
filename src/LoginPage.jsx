import React, { useState } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();
    const [eye, seteye] = useState(false);

    async function GetData() {
        let result = await fetch("http://localhost:5000/Login", {
            method: "Post",
            body: JSON.stringify({ Email, Password }),
            headers: {
                "Content-type": "application/json"
            }

        });
        result = await result.json();

        if (result.Name) {
            alert("Login Succesful");
            localStorage.setItem("user", JSON.stringify(result));  // to pass the protected routes by private component
            navigate("/");
        }
        else {
            if (result == "0") {
                alert("No such user Found");
            }
            else {
                alert("Please Enter Valid Email or Password");
            }
        }


    }

    function PasswordShow(){
        const pass =  document.getElementById("Pass");
        if(!eye){
           seteye(true);
           pass.setAttribute("type","text");
      
        }
        else{
            seteye(false);
            pass.setAttribute("type","Password");
          
        }
    }
    return (
        <div className="Maindiv">
            <div className="MainHeading" style={{ fontSize: "2rem" ,userSelect:"none",marginTop:"0.8rem" }} >Please Login To Access Portal</div>
            <div className="Signup_page" style={{ paddingBottom: "2rem" }} >
                <h2 style={{ fontWeight: "600" ,userSelect:"none" }} >Login Here</h2>

                <input type="email" placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value) }}></input>

                <div className="passworddiv"> <input type="password" id="Pass" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }}></input>
                    { eye? <div><Eye color="black" onClick={PasswordShow}/></div>:<div><EyeSlash color="black"  onClick={PasswordShow}/></div>}
                </div>

                <button style={{ color: "black", fontWeight: "800",userSelect:"none" }} onClick={GetData} >Log in</button>

            </div>
        </div>
    )
}
export default Login;