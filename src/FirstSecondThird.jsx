import React from "react"
import { NavLink, Outlet } from "react-router-dom";
import first from "./Assests/n1.png"
import second from "./Assests/n2.png"
import third from "./Assests/n3.png"
import Forth from "./Assests/n4.png"
import Excel from "./Assests/excel.png"

function FirstSecondThird() {
    return (
        <div className="Super5">

            <div className="ZoneLink2">
            <NavLink to="first" ><div className="firste">
            <img width="40" height="58"  src={first}
            alt="1st-place-medal-emoji"/>winner
          </div></NavLink> 

          <NavLink to="second"> <div class="firste">
            <img  width="40" height="58" src={second}
            alt="2nd-place-medal-emoji"/>winner
          </div></NavLink>
         

          <NavLink to="third"> <div class="firste">
            <img  width="40" height="58" src={third}
            alt="3rd-place-medal-emoji"/>winner
          </div></NavLink>
         
          <NavLink to="Forth"> <div class="firste">
            <img width="40" height="58"  src={Forth}
            alt="4th-place-medal-emoji"/>winner
            </div></NavLink>

            <NavLink to="GenerateExcel"> <div class="firste">
            <img  width="45" height="40" src={Excel}
            alt="Excel Report"/>Generate Report
            </div></NavLink>
            </div>

            <Outlet />


        </div>
    )

}
export default FirstSecondThird;