import React, { useState, useEffect } from "react"

import { Table, Button } from 'react-bootstrap';
import ReactConfetti from "react-confetti";


function Page({ data }) {
    const initialAnimationNumbers = Array.from({ length: 10 }, () => "");
    const [animationNumbers1, setAnimationNumbers1] = useState(initialAnimationNumbers);
    const [animationNumbers2, setAnimationNumbers2] = useState(initialAnimationNumbers);
    const [windowDimension, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    // 
    const [confettiActive, setConfettiActive] = useState(false);
    const [data2, setDATA2] = useState([]);
    const [data3, setDATA3] = useState([]);

    const [save, setsave] = useState(false);



    useEffect(() => {
        if (data2.length > 0 && data2[0].CONNECTION) {
            const partnerDigits = Array.from(data2[0].CONNECTION.toString()).map(Number);
            setAnimationNumbers1(partnerDigits);
        }
        if (data3.length > 0 && data3[0].CONNECTION) {
            const partnerDigits = Array.from(data3[0].CONNECTION.toString()).map(Number);
            setAnimationNumbers2(partnerDigits);
        }

    }, [data2, data3]);


    const GenerateRandom = () => {


        const animationInterval1 = setInterval(() => {
            const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
            setAnimationNumbers1(randomNumbers);
        }, 100);
        const animationInterval2 = setInterval(() => {
            const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
            setAnimationNumbers2(randomNumbers);
        }, 100);

        setTimeout(() => {
            clearInterval(animationInterval1);
            clearInterval(animationInterval2);

            handleGenerateSecondWinner();
            stopConfettiAfterDelay();

        }, 3000);
    }


    async function SaveData2() {
        const record2 = data2[0];
        const record3 = data3[0];


        const result2 = await fetch(`http://localhost:5000/watersecond/${record2.SR_NO}`, {
            method: "POST",
            body: JSON.stringify(data2),
            headers: {
                "Content-Type": "application/json"
            }

        });


        // data3
        const result3 = await fetch(`http://localhost:5000/watersecond/${record3.SR_NO}`, {
            method: "POST",
            body: JSON.stringify(data3),
            headers: {
                "Content-Type": "application/json"
            }
        });

        // data4


        if (result2.ok && result3.ok) {
            alert("Data saved successfully");
        } else {
            alert("Failed to save data");
        }

    }
   
    async function GetData2(SR_NO) {
        let result = await fetch(`http://localhost:5000/search3/${SR_NO}`);
        result = await result.json();
       

        for (const key of Object.keys(localStorage)) {
            const itemValue = localStorage.getItem(key);

            if (result[0].CONNECTION == itemValue.CONNECTION) {
                const randomSR_NO = data();
                await GetData2(randomSR_NO);
                console.log("oh yes");
            }
            else {
                setDATA2(result);
                setsave(true);
                localStorage.setItem("waterwinner2-1", JSON.stringify(result));
            }
        }


    }

    async function GetData3(SR_NO) {

        let result = await fetch(`http://localhost:5000/search3/${SR_NO}`);
        result = await result.json();
        for (const key of Object.keys(localStorage)) {
            const itemValue = localStorage.getItem(key);

            if (result[0].CONNECTION == itemValue.CONNECTION) {
                const randomSR_NO = data();
                await GetData3(randomSR_NO);
                console.log("oh yes");
            }
            else {
                setDATA3(result);
                setsave(true);
                localStorage.setItem("waterwinner2-2", JSON.stringify(result));
            }
        }

      

    }


    const stopConfettiAfterDelay = () => {
        setTimeout(() => {
            setConfettiActive(false);
        }, 6000);
    };

    const handleGenerateSecondWinner = async () => {
        const randomSR_NO_1 = data();
        const randomSR_NO_2 = data();

        await GetData2(randomSR_NO_1);
        await GetData3(randomSR_NO_2);

        setConfettiActive(true);
    }

    return (

        <div className="Super2" >
            {confettiActive ?
                <div>
                    {<ReactConfetti width={windowDimension.width} height={windowDimension.height} numberOfPieces={1000} gravity={0.09} recycle={false} />}
                </div>
                : null
            }

            <div ><h1 className="MainHeading">Get 2<sup>nd</sup> Winners Here</h1></div>

            <div className="SecondParentDiv">


                {/* First */}
                <div className="SecondDiv1">

                    <div className="buttons2">
                        <div>
                            <Button variant="info" style={{ fontWeight: "700",border: "1px solid black" }} onClick={GenerateRandom} title="cilck to generate winners">Second Winners</Button>{' '}
                        </div>
                        {save ?
                            <div>
                                <Button variant="info" onClick={SaveData2} style={{ fontWeight: "700",border: "1px solid black" }} >Save data</Button>{' '}
                            </div>
                            : null
                        }
                    </div>
                    <div className="subdivs2" >
                        <div ><h3 className="waterHeading">Connection Number of the winner is</h3>

                            <div className="input">
                                {animationNumbers1.map((number, index) => (
                                    <input
                                        key={index}
                                        className="box"
                                        value={number}
                                        readOnly
                                    />
                                ))}
                            </div>
                        </div>
                        {/* first table */}
                        <div className="SecondTableDiv2">

                            <Table striped className="custom-table" hover >
                                <tbody>
                                    <tr style={{ fontWeight: "700" }}>

                                        <td>CONNECTION NUMBER</td>
                                        <td>ZONE_NO</td>
                                        <td>WARD_NO</td>
                                        <td>NAME</td>
                                        <td>ADDRESS</td>

                                    </tr>


                                    {
                                        data2.map((item) =>
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


                        {/* second */}

                    </div>

                    <div className="subdivs2" >
                        <div ><h3 className="waterHeading">Connection Number of the winner is</h3>

                            <div className="input">
                                {animationNumbers2.map((number, index) => (
                                    <input
                                        key={index}
                                        className="box"
                                        value={number}
                                        readOnly
                                    />
                                ))}
                            </div>
                        </div>


                        {/* second table */}
                        <div className="SecondTableDiv2">

                            <Table striped className="custom-table" hover >
                                <tbody>
                                    <tr style={{ fontWeight: "700" }}>

                                        <td>CONNECTION NUMBER</td>
                                        <td>ZONE_NO</td>
                                        <td>WARD_NO</td>
                                        <td>NAME</td>
                                        <td>ADDRESS</td>

                                    </tr>


                                    {
                                        data3.map((item) =>
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
                    </div>





                </div>


            </div>
        </div>
    )
}
export default Page;