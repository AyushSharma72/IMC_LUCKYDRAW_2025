import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ReactConfetti from "react-confetti";
import { Table, Button } from 'react-bootstrap';

function Zone7() {

   
    const [windowDimension, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [confettiActive, setConfettiActive] = useState(false);
    const navigate = useNavigate();
    const min = 8184;
    const max = 10791;

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
        for (let i = 0; i < 3; i++) {
            setloading(true);
            let SR_NO = Random();
            let result = await fetch(`http://localhost:5000/search3/${SR_NO}`);
            result = await result.json();
    
            let repeatFound = false; // Flag to check if a repeat is found
    
            for (const key of Object.keys(localStorage)) {
                const itemValue = localStorage.getItem(key);
    
                if (result[0].CONNECTION === itemValue[0].CONNECTION) {
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
    
            localStorage.setItem(`WZ${i + 19}`, JSON.stringify(result));
        }
    }
    
  

    async function SaveData() {
        try {
            for (const item of state) {
                const SR_NO = item.SR_NO;

                const response = await fetch(`http://localhost:5000/WaterForth/Zone7/${SR_NO}`, {
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
            navigate("/Water/Forth/Zone8");

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
                        <h2 className="ZoneHeading">Click To Get Zone7 Winners </h2>
                        :
                        <h2 className="ZoneHeading"> Zone 7 Winners are </h2>
                    }
                    {confettiActive ?
                        <div>
                            {<ReactConfetti width={windowDimension.width} height={windowDimension.height} numberOfPieces={1000} gravity={0.09} recycle={false} />}
                        </div>
                        : null
                    }
                    <Table striped className ="custom-table" hover >
                            <tbody>
                                <tr style={{ fontWeight: "700" }}>

                                    <td>CONNECTION NUMBER</td>
                                    <td>ZONE_NO</td>
                                    <td>WARD_NO</td>
                                    <td>NAME</td>
                                    <td>ADDRESS</td>
                                 
                                </tr>


                                {
                                    state.map((item) =>
                                        <tr key={item.SR_NO}>
                                            <td>{item.CONNECTION}</td>
                                            <td>{item.ZONE}</td>
                                            <td>{item.WARD}</td>
                                            <td>{item.NAME}</td>
                                            <td>{item.ADDRESS}</td>
                                             
                                        </tr>
                                    )
                                }
                            </tbody>

                        </Table>
                    <div className="buttons">
                        <div>
                            <Button variant="warning" style={{ fontWeight: "700" }} onClick={GET}>Zone 7 Winners</Button>{' '}
                        </div>
                        {save ?
                            <div>
                                <Button variant="warning" onClick={SaveData} style={{ fontWeight: "700" }} >Next</Button>{' '}
                            </div>
                            : null

                        }

                    </div>
                </div>


            }


        </div>

    )
}
export default Zone7;