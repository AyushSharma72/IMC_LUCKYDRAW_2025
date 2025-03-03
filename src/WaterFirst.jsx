import React, { useState, useEffect } from "react"
import { Table, Button } from 'react-bootstrap';
import ReactConfetti from "react-confetti";
import { NavLink, Outlet } from "react-router-dom";


function First({ data }) {

    const [data1, setDATA1] = useState([]);
    const [save, setsave] = useState(false);
    const initialAnimationNumbers = Array.from({ length: 10 }, () => "");
    const [animationNumbers, setAnimationNumbers] = useState(initialAnimationNumbers);
    const [windowDimension, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [confettiActive, setConfettiActive] = useState(false);
    

    async function SaveData1() {
        const record = data1[0]; // Access the first object in data1
        
        const result = await fetch(`http://localhost:5000/waterfirst/${record.SR_NO}`, {
        
            method: "POST",

            body: JSON.stringify(data1),

            headers: {
                "Content-Type": "application/json"
            }
        });
        if (result.ok) {
            alert("Data saved successfully");
        } else {
            alert("Failed to save data");
        }
    }

    
    useEffect(() => {
        if (data1.length > 0 && data1[0].CONNECTION) {
            const partnerDigits = Array.from(data1[0].CONNECTION.toString()).map(Number);
            setAnimationNumbers(partnerDigits);
        }
    }, [data1]);


    async function GetData1(SR_NO) {

        let result = await fetch(`http://localhost:5000/search3/${SR_NO}`);
        result = await result.json();
        console.log(SR_NO);
        if (result) {
            setDATA1(result);
            localStorage.setItem("waterwinner1", JSON.stringify(result));
            setsave(true);
        }
        else {
            <h1 style={{ color: "red" }}>Failed To Load Data</h1>
        }

    }

    const stopConfettiAfterDelay = () => {
        setTimeout(() => {
        setConfettiActive(false);
        },6000); 
      };



      const handleGenerateFirstWinner = async () => {
        // Fetch new data
        const randomSR_NO = data();
        await GetData1(randomSR_NO);
        setConfettiActive(true)
       
}


    const GenerateRandom = () => {
        
        const animationInterval = setInterval(() => {
            const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
            setAnimationNumbers(randomNumbers);
        }, 100);

        setTimeout(() => {
            clearInterval(animationInterval);
            handleGenerateFirstWinner();
            stopConfettiAfterDelay();

        }, 3000);
    }

    return (
        
  <div className="Super">
   
  {confettiActive?
    <div>
      {  <ReactConfetti width={windowDimension.width} height={windowDimension.height} numberOfPieces={1000} gravity={0.1} recycle = {false} />}
    </div>
    :null
    }
            <div ><h1 className="MainHeading">Get 1<sup>st</sup> Winner Here</h1></div>

            <div className="ParentDiv">
          

                <div className="Div1">
                    <div className="subdivs" >
                        <div ><h2 className="Heading">Connection Number of the winner is</h2></div>

                        <div className="input">
                            {animationNumbers.map((number, index) => (
                                <input
                                    key={index}
                                    className="box"
                                    value={number}
                                    readOnly
                                />
                            ))}
                        </div>

                    </div>


                </div>

                <div className="Div2">
                    <div className="TableDiv1">

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
                                    data1.map((item) =>
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
                    </div>
                    <div className="buttons">

                        <div>
                            <Button variant="info" style={{ fontWeight: "700" ,border:"1px solid black" }} onClick={GenerateRandom} title="Click to generate first winner">First Winner</Button>{' '}
                        </div>
                        {save ?
                            <div>
                                <Button variant="info" onClick={SaveData1} style={{ fontWeight: "700" ,border: "1px solid black"}} >Save data</Button>{' '}
                            </div>
                            : null
                        }
                    </div>
                </div>

            </div>
        </div>
    )

}

export default First;


