import React, { useEffect } from "react";
import mayor from "./Assests/mayor.png"
import indore from "./Assests/indore.jpeg"
import rajwada from "./Assests/rajwada.jpg"
import ghanta from "./Assests/ghanta.jpeg"
import lucky from "./Assests/lucky.gif"
import CM from "./Assests/CM.png"
import ev from "./Assests/evu-png.png"
import scooty from "./Assests/scooty.png"
import tv from "./Assests/tv2.png"

function Home() {
  let i = 0; // Start index from 0

  useEffect(() => {
    const interval = setInterval(backgroundImages, 3000);
    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);

  function backgroundImages() {
    const imagearr = [
      rajwada,
      ghanta,
      indore
    ]

    // Changes start
    const ele = document.getElementById("main")
    if (ele) {
      ele.style.backgroundImage = `url("${imagearr[i]}")`;
    }
    // Changes End
    i++;
    if (i === imagearr.length) {
      i = 0;
    }
  }

  return (


    <div className="PARENTHERO">

      <div className="Hero" >
        <div className="Image" id="main">

        </div>
        <div className="WELCOME">

          <div className="PCM">
            <div>  <img src={CM} className="CM" style={{ width: "350px" }}></img></div>
          
           <div> <img src={lucky} className="CM" style={{ width: "250px",marginTop:"3rem" }}></img> </div>

            <div ><img src={mayor} style={{ width: "350px" }}></img></div>
          
          </div>
   </div>
          {/* price section  */}
          <div className="PriceSection">
            <marquee  scrollamount="20" behavior="scroll">
              
              <div className="Price">

                <div className="car">
                <h1 className="PHeading">First Price</h1>
                <img src={ev} style={{ width: "500px" }}></img>
                </div>
                
                <div className="p">
                <h1 className="PHeading">Second Price</h1>
                <img src={scooty} style={{ width: "300px" }}></img>
                </div>

                <div  className="tv">               
                 <h1 className="PHeading">Third Price</h1>
                <img src={tv} style={{ width: "300px" }}></img>
                </div>

              </div>
              
            </marquee>
          </div>
          





        </div>
      </div>
    

  
  );
}

export default Home;
