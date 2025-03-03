import React, { useState, useEffect } from "react"
import { Table, Button } from 'react-bootstrap';
import ReactConfetti from "react-confetti";

function WaterThird({ data }) {
    const initialAnimationNumbers = Array.from({ length: 10 }, () => "");
    const [animationNumbers1, setAnimationNumbers1] = useState(initialAnimationNumbers);
    const [animationNumbers2, setAnimationNumbers2] = useState(initialAnimationNumbers);

    // const [fireworks, setfireworks] = useState(false);
    const [windowDimension, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [confettiActive, setConfettiActive] = useState(false);
    const [data5, setDATA5] = useState([]);
    const [data6, setDATA6] = useState([]);

    const [save, setsave] = useState(false);

    useEffect(() => {
        if (data5.length > 0 && data5[0].CONNECTION) {
            const partnerDigits = Array.from(data5[0].CONNECTION.toString()).map(Number);
            setAnimationNumbers1(partnerDigits);
        }
        if (data6.length > 0 && data6[0].CONNECTION) {
            const partnerDigits = Array.from(data6[0].CONNECTION.toString()).map(Number);
            setAnimationNumbers2(partnerDigits);
        }

    }, [data5, data6]);

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

            handleGenerateThirdWinner();
            stopConfettiAfterDelay();
        }, 3000);
    }

    async function SaveData3() {

        const record5 = data5[0];
        const record6 = data6[0];


        const result5 = await fetch(`http://localhost:5000/waterthird/${record5.SR_NO}`, {
            method: "POST",
            body: JSON.stringify(data5),
            headers: {
                "Content-Type": "application/json"
            }
        });

        // data6
        const result6 = await fetch(`http://localhost:5000/waterthird/${record6.SR_NO}`, {
            method: "POST",
            body: JSON.stringify(data6),
            headers: {
                "Content-Type": "application/json"
            }
        });




        if (result5.ok && result6.ok) {
            alert("Data saved successfully");
        } else {
            alert("Failed to save data");
        }
    }




    async function GetData5(SR_NO) {


        let result = await fetch(`http://localhost:5000/search3/${SR_NO}`);
        result = await result.json();
        for (const key of Object.keys(localStorage)) {
            const itemValue = localStorage.getItem(key);

            if (result[0].CONNECTION == itemValue.CONNECTION) {
                const randomSR_NO = data();
                await GetData5(randomSR_NO);
                console.log("oh yes");
            }
            else {
                setDATA5(result);

                localStorage.setItem("winner3-1", JSON.stringify(result));
            }
        }


    }
    async function GetData6(SR_NO) {


        let result = await fetch(`http://localhost:5000/search3/${SR_NO}`);
        result = await result.json();
        for (const key of Object.keys(localStorage)) {
            const itemValue = localStorage.getItem(key);

            if (result[0].CONNECTION == itemValue.CONNECTION) {
                const randomSR_NO = data();
                await GetData6(randomSR_NO);
                console.log("oh yes");
            }
            else {
                setDATA6(result);
                setsave(true);
                localStorage.setItem("winner3-2", JSON.stringify(result));
            }
        }

    }



    const stopConfettiAfterDelay = () => {
        setTimeout(() => {
            setConfettiActive(false);
        }, 6000);
    };


    const handleGenerateThirdWinner = () => {

        const randomSR_NO_5 = data();
        const randomSR_NO_6 = data();


        GetData5(randomSR_NO_5);
        GetData6(randomSR_NO_6);

        setConfettiActive(true);
    }



    return (

        <div className="Superw3">
            {confettiActive ?
                <div>
                    {<ReactConfetti width={windowDimension.width} height={windowDimension.height} numberOfPieces={1000} gravity={0.09} recycle={false} />}
                </div>
                : null
            }
            <div classname="headdiv"><h1 className="MainHeading">Get 3<sup>rd</sup> Winners Here</h1></div>
            <div className="thirdParentDiv2">


                {/* First */}
                <div className="ThirdDiv1">
                    <div className="buttons3">
                        <div>
                            <Button variant="info" style={{ fontWeight: "700",border: "1px solid black" }} onClick={GenerateRandom} title="click to generate third winners">Third Winners</Button>{' '}
                        </div>
                        {save ?
                            <div>
                                <Button variant="info" onClick={SaveData3} style={{ fontWeight: "700",border: "1px solid black" }} >Save data</Button>{' '}
                            </div>
                            : null
                        }
                    </div>
                    <div className="subdivs3" >
                        <div><h3 className="waterHeading">Connection Number of the winner is</h3>

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
                                        data5.map((item) =>
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
                    <div className="subdivs3" >
                        <div><h3 className="waterHeading">Connection Number of the winner is</h3>

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
                                        data6.map((item) =>
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

export default WaterThird;