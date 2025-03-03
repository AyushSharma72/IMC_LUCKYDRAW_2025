import { useState } from "react";
import {useNavigate } from "react-router-dom";
import ReactConfetti from "react-confetti";
import { Table, Button } from 'react-bootstrap';

function Zone15() {

  
    const [windowDimension, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [confettiActive, setConfettiActive] = useState(false);
    const min = 92384;
    const max = 98832;
    const navigate = useNavigate();
    
    function Random() {

        let randomValue;
        randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomValue;
    }

  

 
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(false);
  const [save, setsave] = useState(false);
  const [show, setShow] = useState(true);

  async function GET() {
  
    let FetchData = [];
    for (let i = 0; i < 5; i++) {
        setloading(true);
        let SR_NO = Random();
        let result = await fetch(`http://localhost:5000/search2/${SR_NO}`);
        result = await result.json();

        let repeatFound = false; // Flag to check if a repeat is found

        for (const key of Object.keys(localStorage)) {
            const itemValue = localStorage.getItem(key);

            if (result[0].PARTNER === itemValue[0].PARTNER) {
                console.log("repeat");
                repeatFound = true;
                break; // Break the loop when a repeat is found
            }
        }
        if (!repeatFound) {
            FetchData.push(...result);
        }

        setloading(false);
        setsave(true);
        setShow(false);
        setstate(FetchData);
        setConfettiActive(true);

        localStorage.setItem(`Z${i + 71}`, JSON.stringify(result));
    }
}
      async function SaveData() {
        try {
            for (const item of state) {
                const SR_NO = item.SR_NO;
    
                const response = await fetch(`http://localhost:5000/Forth/Zone15/${SR_NO}`, {
                    method: "POST",
                    body: JSON.stringify(item),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
    
                if (!response.ok) {
                    console.error(`Failed to save data`);
                    return; // Exit the loop and function on failure
                }
            }
    
            
            alert("Data saved successfully");
            navigate("/Property/Forth/Zone16");

    
        } catch (error) {
            console.error("Error saving data:", error);
           
            alert("Failed to save data");
        }
    }


    return (
        <div className="ZoneDiv">
        {loading ?


            <p className="parastyle">Loading data Please Wait ......</p>


            :

            <div className="TableDiv1">
                {show ?
                    <h2 className="ZoneHeading">Click To Get Zone 15 Winners </h2>
                    :
                    <h2 className="ZoneHeading"> Zone 15 Winners are </h2>
                }
                 {confettiActive?
    <div>
      {  <ReactConfetti width={windowDimension.width} height={windowDimension.height} numberOfPieces={1000} gravity={0.09} recycle={false} />}
    </div>
    :null
    }
                <Table striped className="custom-table" hover >
                    <tbody>
                        <tr style={{ fontWeight: "700" }}>
                            <td>PROPERTY_ID</td>
                            <td>ZONE</td>
                            <td>WARD</td>
                            <td>PROPERTY_OWNER_NAME</td>
                            <td>ASSESMENT_YEAR</td>


                        </tr>


                        {

                            state.map((item) =>
                                <tr key={item.SR_NO}>
                                    <td>{item.PARTNER}</td>
                                    <td>{item.ZONE}</td>
                                    <td>{item.WARD}</td>
                                    <td>{item.PROPERTY_OWNER_NAME}</td>
                                    <td>{item.ASSMENTYEAR}</td>
                                </tr>
                            )
                        }
                    </tbody>

                </Table>
                <div className="buttons">
                    <div>
                        <Button variant="info" style={{ fontWeight: "700",border:"1px solid black" }} onClick={GET}>Zone 15 Winners</Button>{' '}
                    </div>
                    {save ?
                        <div>
                            <Button variant="info" onClick={SaveData} style={{ fontWeight: "700",border:"1px solid black" }} >Next</Button>{' '}
                        </div>
                        : null

                    }

                </div>
            </div>


        }


    </div>

    )
}
export default Zone15;