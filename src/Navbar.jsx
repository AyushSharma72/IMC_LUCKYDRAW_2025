import React from "react";
import imclogo from "./Assests/imclogo.png"
import { HouseFill } from "react-bootstrap-icons"
import {useNavigate} from "react-router-dom"
import G20 from "./Assests/G20.png"
import Property from "./Assests/property.png"
import Water from "./Assests/water.png"
import { NavLink } from "react-router-dom"


function Navbar() {
  const auth = localStorage.getItem("user");
  const navigate  = useNavigate();
  function LogOut(){
  localStorage.clear();
  navigate("/login");
  alert("You have been Logged out")
  }

  return (

    <div className="LinkParent">
      <div className="IMC">
        <img className="imclogo" style={{width:"150px"}} src={imclogo} alt="" />
      </div>
      {auth ?
      <div className="Link">
        <div className="Links">
          <div className="H"><HouseFill size={45} style={{ color: "orangered" }} /> <NavLink to="/" className="home">Home</NavLink></div>
          <div className="PropertyLink"><img width="50" src={Property} alt="1st-place-medal-emoji" /> <NavLink to="/Property">Property Tax Winners</NavLink> </div>
          <div  className="PropertyLink"> <img width="50" src={Water} alt="1st-place-medal-emoji" /> <NavLink to="/Water">Water Tax Winners</NavLink></div>
          <div className ="Login">
          <button style={{ color: "black", fontWeight: "800" }} onClick={LogOut} title="Press to Logout">Log out</button>
        </div>

       
       </div>
       <div className="IMC">
        <img className="imclogo" style={{width:"14rem"}} src={G20} alt="" />
        </div>  
       </div>
         : null
         }
         
    </div>
  )
}
export default Navbar;