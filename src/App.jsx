import React from "react";
import First from "./firstwinner";
import Second from "./secondwinner";
import Third from "./thirdWinner";
import Forth from "./forthwinners";
import Home from "./home";
import Navbar from "./Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Zone1 from "./Zone1";
import Zone2 from "./Zone2";
import Zone3 from "./Zone3";
import Zone4 from "./Zone4";
import Zone5 from "./Zone5";
import Zone6 from "./Zone6";
import Zone7 from "./Zone7";
import Zone8 from "./Zone8";
import Zone9 from "./Zone9";
import Zone10 from "./Zone10";
import Zone11 from "./Zone11";
import Zone12 from "./Zone12";
import Zone13 from "./Zone13";
import Zone14 from "./Zone14";
import Zone15 from "./Zone15";
import Zone16 from "./Zone16";
import Zone17 from "./Zone17";
import Zone18 from "./Zone18";
import Zone19 from "./Zone19";
import Generate from "./generateExcel";
import FirstSecondThird from "./FirstSecondThird";
import FirstSecondThird2 from "./FiestSecondThird2";
import PrivateComponent from "./authorization.";
import Login from "./LoginPage";
import "./App.css"

//water
import WaterFirst from "./WaterFirst";
import WaterSecond from "./WaterSecond";
import WaterThird from "./WaterThird";
import WaterForth from "./WaterForth";
import WaterExcel from "./WaterExcel";
import Waterzone1 from "./waterzones/zone1";
import Waterzone2 from "./waterzones/zone2";
import Waterzone3 from "./waterzones/zone3";
import Waterzone4 from "./waterzones/zone4";
import Waterzone5 from "./waterzones/zone5";
import Waterzone6 from "./waterzones/zone6";
import Waterzone7 from "./waterzones/zone7";
import Waterzone8 from "./waterzones/zone8";
import Waterzone9 from "./waterzones/zone9";
import Waterzone10 from "./waterzones/zone10";
import Waterzone11 from "./waterzones/zone11";
import Waterzone12 from "./waterzones/zone12";
import Waterzone13 from "./waterzones/zone13";
import Waterzone14 from "./waterzones/zone14";
import Waterzone15 from "./waterzones/zone15";
import Waterzone16 from "./waterzones/zone16";
import Waterzone17 from "./waterzones/zone17";
import Waterzone18 from "./waterzones/zone18";
import Waterzone19 from "./waterzones/zone19";

function File() {
  const min = 1;
  const max = 135608;
  const min2 = 1;
  const max2 = 32619;

  function Random() {
    let randomValue;
    randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomValue;
  }

  function Random2() {
    let randomValue;
    randomValue = Math.floor(Math.random() * (max2 - min2 + 1)) + min;
    return randomValue;
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />

          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Home />} />

            {/* property */}
            <Route path="/Property" element={<FirstSecondThird />}>
              <Route path="first" element={<First data={Random} />} />
              <Route path="second" element={<Second data={Random} />} />
              <Route path="third" element={<Third data={Random} />} />
              <Route path="GenerateExcel" element={<Generate />} />

              <Route path="Forth" element={<Forth />}>
                <Route path="Zone1" element={<Zone1 data={Random} />} />
                <Route path="Zone2" element={<Zone2 data={Random} />} />
                <Route path="Zone3" element={<Zone3 data={Random} />} />
                <Route path="Zone4" element={<Zone4 data={Random} />} />
                <Route path="Zone5" element={<Zone5 data={Random} />} />
                <Route path="Zone6" element={<Zone6 data={Random} />} />
                <Route path="Zone7" element={<Zone7 data={Random} />} />
                <Route path="Zone8" element={<Zone8 data={Random} />} />
                <Route path="Zone9" element={<Zone9 data={Random} />} />
                <Route path="Zone10" element={<Zone10 data={Random} />} />
                <Route path="Zone11" element={<Zone11 data={Random} />} />
                <Route path="Zone12" element={<Zone12 data={Random} />} />
                <Route path="Zone13" element={<Zone13 data={Random} />} />
                <Route path="Zone14" element={<Zone14 data={Random} />} />
                <Route path="Zone15" element={<Zone15 data={Random} />} />
                <Route path="Zone16" element={<Zone16 data={Random} />} />
                <Route path="Zone17" element={<Zone17 data={Random} />} />
                <Route path="Zone18" element={<Zone18 data={Random} />} />
                <Route path="Zone19" element={<Zone19 data={Random} />} />
              </Route>
            </Route>

            {/* water */}
            <Route path="/Water" element={<FirstSecondThird2 />}>
              <Route path="first" element={<WaterFirst data={Random2} />} />
              <Route path="second" element={<WaterSecond data={Random2} />} />
              <Route path="third" element={<WaterThird data={Random2} />} />

              {/* zones */}

              <Route path="Forth" element={<WaterForth data={Random2} />}>
                <Route path="Zone1" element={<Waterzone1 />} />
                <Route path="Zone2" element={<Waterzone2 />} />
                <Route path="Zone3" element={<Waterzone3 />} />
                <Route path="Zone4" element={<Waterzone4 />} />
                <Route path="Zone5" element={<Waterzone5 />} />
                <Route path="Zone6" element={<Waterzone6 />} />
                <Route path="Zone7" element={<Waterzone7 />} />
                <Route path="Zone8" element={<Waterzone8 />} />
                <Route path="Zone9" element={<Waterzone9 />} />
                <Route path="Zone10" element={<Waterzone10 />} />
                <Route path="Zone11" element={<Waterzone11 />} />
                <Route path="Zone12" element={<Waterzone12 />} />
                <Route path="Zone13" element={<Waterzone13 />} />
                <Route path="Zone14" element={<Waterzone14 />} />
                <Route path="Zone15" element={<Waterzone15 />} />
                <Route path="Zone16" element={<Waterzone16 />} />
                <Route path="Zone17" element={<Waterzone17 />} />
                <Route path="Zone18" element={<Waterzone18 />} />
                <Route path="Zone19" element={<Waterzone19 />} />
              </Route>
              <Route
                path="GenerateWaterExcel"
                element={<WaterExcel></WaterExcel>}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default File;
