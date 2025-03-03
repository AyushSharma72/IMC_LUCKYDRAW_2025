import React, { useState, useEffect } from "react"
import { Table, Button } from 'react-bootstrap';
import ReactConfetti from "react-confetti";

function ThirdWinner({ data }) {
    const initialAnimationNumbers = Array.from({ length: 10 }, () => "");
    const [animationNumbers1, setAnimationNumbers1] = useState(initialAnimationNumbers);
    const [animationNumbers2, setAnimationNumbers2] = useState(initialAnimationNumbers);
    const [animationNumbers3, setAnimationNumbers3] = useState(initialAnimationNumbers);
    const [animationNumbers4, setAnimationNumbers4] = useState(initialAnimationNumbers);
    const [animationNumbers5, setAnimationNumbers5] = useState(initialAnimationNumbers);
    // const [fireworks, setfireworks] = useState(false);
    const [windowDimension, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [confettiActive, setConfettiActive] = useState(false);
    const [data5, setDATA5] = useState([]);
    const [data6, setDATA6] = useState([]);
    const [data7, setDATA7] = useState([]);
    const [data8, setDATA8] = useState([]);
    const [data9, setDATA9] = useState([]);
    const [save, setsave] = useState(false);


    useEffect(() => {
        if (data5.length > 0 && data5[0].PARTNER) {
            const partnerDigits = Array.from(data5[0].PARTNER.toString()).map(Number);
            setAnimationNumbers1(partnerDigits);
        }
        if (data6.length > 0 && data6[0].PARTNER) {
            const partnerDigits = Array.from(data6[0].PARTNER.toString()).map(Number);
            setAnimationNumbers2(partnerDigits);
        }
        if (data7.length > 0 && data7[0].PARTNER) {
            const partnerDigits = Array.from(data7[0].PARTNER.toString()).map(Number);
            setAnimationNumbers3(partnerDigits);
        }
        if (data8.length > 0 && data8[0].PARTNER) {
            const partnerDigits = Array.from(data8[0].PARTNER.toString()).map(Number);
            setAnimationNumbers4(partnerDigits);
        }
        if (data9.length > 0 && data9[0].PARTNER) {
            const partnerDigits = Array.from(data9[0].PARTNER.toString()).map(Number);
            setAnimationNumbers5(partnerDigits);
        }
    }, [data5, data6, data7, data8, data9]);

    const GenerateRandom = () => {
        const animationInterval1 = setInterval(() => {
            const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
            setAnimationNumbers1(randomNumbers);
        }, 100);
        const animationInterval2 = setInterval(() => {
            const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
            setAnimationNumbers2(randomNumbers);
        }, 100);
        const animationInterval3 = setInterval(() => {
            const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
            setAnimationNumbers3(randomNumbers);
        }, 100);
        const animationInterval4 = setInterval(() => {
            const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
            setAnimationNumbers4(randomNumbers);
        }, 100);
        const animationInterval5 = setInterval(() => {
            const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
            setAnimationNumbers5(randomNumbers);
        }, 100);

        setTimeout(() => {

            clearInterval(animationInterval1);
            clearInterval(animationInterval2);
            clearInterval(animationInterval3);
            clearInterval(animationInterval4);
            clearInterval(animationInterval5);
            handleGenerateThirdWinner();
            stopConfettiAfterDelay();
        }, 3000);
    }

    async function SaveData3() {

        const record5 = data5[0];
        const record6 = data6[0];
        const record7 = data7[0];
        const record8 = data8[0];
        const record9 = data9[0];

        const result5 = await fetch(`http://localhost:5000/third/${record5.SR_NO}`, {
            method: "POST",
            body: JSON.stringify(data5),
            headers: {
                "Content-Type": "application/json"
            }
        });

        // data6
        const result6 = await fetch(`http://localhost:5000/third/${record6.SR_NO}`, {
            method: "POST",
            body: JSON.stringify(data6),
            headers: {
                "Content-Type": "application/json"
            }
        });

        // data7
        const result7 = await fetch(`http://localhost:5000/third/${record7.SR_NO}`, {
            method: "POST",
            body: JSON.stringify(data7),
            headers: {
                "Content-Type": "application/json"
            }

        });
        // data8
        const result8 = await fetch(`http://localhost:5000/third/${record8.SR_NO}`, {
            method: "POST",
            body: JSON.stringify(data8),
            headers: {
                "Content-Type": "application/json"
            }

        });
        // data9
        const result9 = await fetch(`http://localhost:5000/third/${record9.SR_NO}`, {
            method: "POST",
            body: JSON.stringify(data9),
            headers: {
                "Content-Type": "application/json"
            }

        });

        if (result5.ok && result6.ok && result7.ok && result8.ok && result9.ok) {
            alert("Data saved successfully");
        } else {
            alert("Failed to save data");
        }
    }




    async function GetData5(SR_NO) {


        let result = await fetch(`http://localhost:5000/search1/${SR_NO}`);
        result = await result.json();

         for (const key of Object.keys(localStorage)) {

            const itemValue = localStorage.getItem(key);
            if (result[0].PARTNER == itemValue.PARTNER) {  

                const randomSR_NO_15 = data();
                await GetData5(randomSR_NO_15);
                console.log("oh yes");
               
            }
            else {
                setDATA5(result);
                localStorage.setItem("winner3-1", JSON.stringify(result));    
            }
        }
       


    }
    async function GetData6(SR_NO) {


        let result = await fetch(`http://localhost:5000/search1/${SR_NO}`);
        result = await result.json();
        for (const key of Object.keys(localStorage)) {

            const itemValue = localStorage.getItem(key);
            if (result[0].PARTNER == itemValue.PARTNER) {  

                const randomSR_NO_15 = data();
                await GetData6(randomSR_NO_15);
                console.log("oh yes");
               
            }
            else {
                setDATA6(result);
                localStorage.setItem("winner3-2", JSON.stringify(result));    
            }
        }
      


    }

    async function GetData7(SR_NO) {


        let result = await fetch(`http://localhost:5000/search1/${SR_NO}`);
        result = await result.json();

        for (const key of Object.keys(localStorage)) {

            const itemValue = localStorage.getItem(key);
            if (result[0].PARTNER == itemValue.PARTNER) {  

                const randomSR_NO_15 = data();
                await GetData7(randomSR_NO_15);
                console.log("oh yes");
               
            }
            else {
                setDATA7(result);
                localStorage.setItem("winner3-3", JSON.stringify(result));    
            }
        }
      


    }
    async function GetData8(SR_NO) {


        let result = await fetch(`http://localhost:5000/search1/${SR_NO}`);
        result = await result.json();

        for (const key of Object.keys(localStorage)) {

            const itemValue = localStorage.getItem(key);
            if (result[0].PARTNER == itemValue.PARTNER) {  

                const randomSR_NO_15 = data();
                await GetData8(randomSR_NO_15);
                console.log("oh yes");
               
            }
            else {
                setDATA8(result);
                localStorage.setItem("winner3-4", JSON.stringify(result));    
            }
        }
      
       

    }
    async function GetData9(SR_NO) {


        let result = await fetch(`http://localhost:5000/search1/${SR_NO}`);
        result = await result.json();

        if (result) {
            for (const key of Object.keys(localStorage)) {

                const itemValue = localStorage.getItem(key);
                if (result[0].PARTNER == itemValue.PARTNER) {  
    
                    const randomSR_NO_15 = data();
                    await GetData9(randomSR_NO_15);
                    console.log("oh yes");
                   
                }
                else {
                    setDATA9(result);
                    setsave(true);
                    localStorage.setItem("winner3-5", JSON.stringify(result)); 
                   }
                   }
        }
    }
    // async function GetData4(SR_NO) {

    //     let result = await fetch(`http://localhost:5000/search1/${SR_NO}`);
    //     result = await result.json();
       
        
    //     for (const key of Object.keys(localStorage)) {
    //         const itemValue = localStorage.getItem(key);
            
    //         if (result[0].PARTNER == itemValue.PARTNER) {
    //             const randomSR_NO = data();
    //             await GetData4(randomSR_NO);
    //             console.log("oh yes");
    //         }
    //         else{
    //             setDATA4(result);
    //             setsave(true);
    //             localStorage.setItem("winner2-3", JSON.stringify(result));
    //         }
    //       }
      

    // }

    const stopConfettiAfterDelay = () => {
        setTimeout(() => {
            setConfettiActive(false);
        }, 6000);
    };

 
    const handleGenerateThirdWinner = async () => {

        const randomSR_NO_5 = data();
        const randomSR_NO_6 = data();
        const randomSR_NO_7 = data();
        const randomSR_NO_8 = data();
        const randomSR_NO_9 = data();

        GetData5(randomSR_NO_5);
        GetData6(randomSR_NO_6);    
        GetData7(randomSR_NO_7);
        GetData8(randomSR_NO_8);
        GetData9(randomSR_NO_9);


        setConfettiActive(true);
    }



    return (

        <div className="Super3">
            {confettiActive ?
                <div >
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
                            <Button variant="info" style={{ fontWeight: "700" ,border:"1px solid black" }} onClick={GenerateRandom} title="click to generate third winners">Third Winners</Button>{' '}
                        </div>
                        {save ?
                            <div>
                                <Button variant="info" onClick={SaveData3} style={{ fontWeight: "700",border: "1px solid black" }} >Save data</Button>{' '}
                            </div>
                            : null
                        }
                    </div>
                    <div className="subdivs3" >
                        <div><h3 className="Heading">Property id of the winner 1 is</h3>

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

                            <Table striped className="custom-table " hover >
                                <tbody>
                                    <tr style={{ fontWeight: "700" }}>


                                        <td>PROPERTY_ID</td>
                                        <td>ZONE_NO</td>
                                        <td>WARD_NO</td>
                                        <td>PROPERTY_OWNER_NAME</td>
                                        <td>ASSESSMENT_YEAR</td>


                                    </tr>

                                    {

                                        data5.map((item) =>
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
                        </div>

                        {/* second */}

                    </div>
                    <div className="subdivs3" >
                        <div><h3 className="Heading">Property id of the winner 2 is</h3>

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

                            <Table striped className="custom-table " hover >
                                <tbody>
                                    <tr style={{ fontWeight: "700" }}>


                                        <td>PROPERTY_ID</td>
                                        <td>ZONE_NO</td>
                                        <td>WARD_NO</td>
                                        <td>PROPERTY_OWNER_NAME</td>
                                        <td>ASSESSMENT_YEAR</td>


                                    </tr>


                                    {
                                        data6.map((item) =>
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
                        </div>

                    </div>


                    {/* third */}
                    <div className="subdivs3" >
                        <div><h3 className="Heading">Property id of the winner 3 is</h3>

                            <div className="input">
                                {animationNumbers3.map((number, index) => (
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

                            <Table striped className="custom-table " hover >
                                <tbody>
                                    <tr style={{ fontWeight: "700" }}>

                                        <td>PROPERTY_ID</td>
                                        <td>ZONE_NO</td>
                                        <td>WARD_NO</td>
                                        <td>PROPERTY_OWNER_NAME</td>
                                        <td>ASSESSMENT_YEAR</td>

                                    </tr>


                                    {
                                        data7.map((item) =>
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
                        </div>
                    </div>

                    {/* Forth */}
                    <div className="subdivs3" >
                        <div ><h3 className="Heading">Property id of the winner 4 is</h3>

                            <div className="input">
                                {animationNumbers4.map((number, index) => (
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

                            <Table striped className="custom-table " hover >
                                <tbody>
                                    <tr style={{ fontWeight: "700" }}>

                                        <td>PROPERTY_ID</td>
                                        <td>ZONE_NO</td>
                                        <td>WARD_NO</td>
                                        <td>PROPERTY_OWNER_NAME</td>
                                        <td>ASSESSMENT_YEAR</td>

                                    </tr>


                                    {
                                        data8.map((item) =>
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
                        </div>

                    </div>

                    {/* fifth */}
                    <div className="subdivs3" >
                        <div ><h3 className="Heading">Property id of the winner 5 is</h3>

                            <div className="input">
                                {animationNumbers5.map((number, index) => (
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

                            <Table striped className="custom-table " hover >
                                <tbody>
                                    <tr style={{ fontWeight: "700" }}>

                                        <td>PROPERTY_ID</td>
                                        <td>ZONE_NO</td>
                                        <td>WARD_NO</td>
                                        <td>PROPERTY_OWNER_NAME</td>
                                        <td>ASSESSMENT_YEAR</td>
                                    </tr>


                                    {
                                        data9.map((item) =>
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
                        </div>

                    </div>




                </div>



            </div>
        </div>


    )
}

export default ThirdWinner;