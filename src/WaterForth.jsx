import { NavLink, Outlet } from "react-router-dom";
function ForthWinner() {
    return (
        <div className="Super4">

            <div className="ZoneLink">
                <NavLink to="Zone1">Zone 1</NavLink>
                <NavLink to="Zone2">Zone 2</NavLink>
                <NavLink to="Zone3">Zone 3</NavLink>
                <NavLink to="Zone4">Zone 4</NavLink>
                <NavLink to="Zone5">Zone 5</NavLink>
                <NavLink to="Zone6">Zone 6</NavLink>
                <NavLink to="Zone7">Zone 7</NavLink>
                <NavLink to="Zone8">Zone 8</NavLink>
                <NavLink to="Zone9">Zone 9</NavLink>
                <NavLink to="Zone10">Zone 10</NavLink>
                <NavLink to="Zone11">Zone 11</NavLink>
                <NavLink to="Zone12">Zone 12</NavLink>
                <NavLink to="Zone13">Zone 13</NavLink>
                <NavLink to="Zone14">Zone 14</NavLink>
                <NavLink to="Zone15">Zone 15</NavLink>
                <NavLink to="Zone16">Zone 16</NavLink>
                <NavLink to="Zone17">Zone 17</NavLink>
                <NavLink to="Zone18">Zone 18</NavLink>
                <NavLink to="Zone19">Zone 19</NavLink>

            </div>
            <Outlet />
            <div>
             <h1 className="Heading" style={{backgroundColor:"lightskyblue",marginTop:"2rem"}}>Please navigate the Above links for respective zones</h1>
            </div>
        </div>
    )

}
export default ForthWinner;