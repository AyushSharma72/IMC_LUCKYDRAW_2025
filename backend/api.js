const express = require("express");
require("./dbconnect2.js");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const database1 = require("./PropertyAdvance.js"); //get property
const database = require("./Zone(1-19).js"); //get zone
const Winners = require("./propertywinners.js"); //post winners
const ExcelJS = require("exceljs"); //excel
const Author = require("./Author.js"); //get author
const Water = require("./WaterAdvance.js"); //get water
const WaterWinners = require("./waterwinners.js"); //post water

//get property
app.get("/search1/:key", async (req, resp) => {
  const key = req.params.key;
  let result = await database1.find({ SR_NO: key });
  resp.send(result);
});

//get zone
app.get("/search2/:key", async (req, resp) => {
  const key = req.params.key;
  let result = await database.find({ SR_NO: key });
  resp.send(result);
});

//get water
app.get("/search3/:key", async (req, resp) => {
  const key = req.params.key;
  let result = await Water.find({ SR_NO: key });
  resp.send(result);
});

//first post
app.post("/first/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateOne(
    { SR_NO: srno },
    { $set: { POSITION: "1st winner" } }
  );
  resp.send(result);
});

//second post
app.post("/second/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "2nd winner" } }
  );
  resp.send(result);
});

//third post
app.post("/third/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "3rd winner" } }
  );
  resp.send(result);
});

//property zones post
app.post("/Forth/Zone1/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 1 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone2/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 2 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone3/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 3 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone4/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 4 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone5/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 5 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone6/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 6 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone7/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = awaitWinners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 7 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone8/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = awaitWinners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 8 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone9/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = awaitWinners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 9 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone10/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 10 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone11/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 11 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone12/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 12 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone13/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 13 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone14/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 14 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone15/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Zone15.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 15 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone16/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 16 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone17/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 17 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone18/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 18 winner" } }
  );
  resp.send(result);
});

app.post("/Forth/Zone19/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await Winners.insertMany(req.body);
  await Winners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "Zone 19 winner" } }
  );
  resp.send(result);
});

app.get("/GenerateExcel", async (req, resp) => {
  try {
    const data = await Winners.find({});

    // Create a new workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet 1");

    // Define column headers
    worksheet.columns = [
      { header: "PROPERTY_ID", key: "PROPERTY_ID", width: 15 },
      { header: "PROPERTY_OWNER_NAME", key: "PROPERTY_OWNER_NAME", width: 15 },
      { header: "WARD", key: "WARD", width: 15 },
      { header: "ZONE", key: "ZONE", width: 15 },
      { header: "ASSMENTYEAR", key: "ASSMENTYEAR", width: 15 },
      { header: "POSITION", key: "POSITION", width: 15 },
    ];
    // Populate the worksheet with data
    data.forEach((item) => {
      worksheet.addRow({
        PROPERTY_ID: item.PARTNER,
        PROPERTY_OWNER_NAME: item.PROPERTY_OWNER_NAME,
        WARD: item.WARD,
        ZONE: item.ZONE,
        ASSMENTYEAR: item.ASSMENTYEAR,
        POSITION: item.POSITION,
        // Map MongoDB fields to Excel columns
      });
    });

    // Save the Excel file to disk
    const buffer = await workbook.xlsx.writeBuffer();

    // Set response headers for downloading
    resp.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    resp.setHeader(
      "Content-Disposition",
      "attachment; filename=mongodb-data.XLSX"
    );

    // Send the XLSX file as a response
    resp.send(Buffer.from(buffer));
  } catch (error) {
    console.error("Error:", error);
    resp.status(500).send("Internal Server Error");
  }
});

//water post

app.post("/waterfirst/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await WaterWinners.insertMany(req.body);
  await WaterWinners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "1st winner" } }
  );
  resp.send(result);
});

app.post("/watersecond/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await WaterWinners.insertMany(req.body);
  await WaterWinners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "2nd winner" } }
  );
  resp.send(result);
});

app.post("/waterthird/:srno", async (req, resp) => {
  const srno = req.params.srno;
  let result = await WaterWinners.insertMany(req.body);
  await WaterWinners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: "3rd winner" } }
  );
  resp.send(result);
});

//water zones

const handleZoneWinner = async (req, resp, zone) => {
  const srno = req.params.srno;
  let result = await WaterWinners.insertMany(req.body);
  await WaterWinners.updateMany(
    { SR_NO: srno },
    { $set: { POSITION: `${zone} winner` } }
  );
  resp.send(result);
};

// Define routes for each zone using a loop
for (let zone = 1; zone <= 19; zone++) {
  app.post(`/WaterForth/Zone${zone}/:srno`, async (req, resp) => {
    await handleZoneWinner(req, resp, `Zone ${zone}`);
  });
}

//water excel

app.get("/GenerateExcelWater", async (req, resp) => {
  try {
    const data = await WaterWinners.find({});

    // Create a new workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet 1");

    // Define column headers
    worksheet.columns = [
      { header: "CONNECTION NUMBER", key: "CONNECTION", width: 15 },
      { header: "NAME", key: "NAME", width: 15 },
      { header: "WARD", key: "WARD", width: 15 },
      { header: "ZONE", key: "ZONE", width: 15 },
      { header: "ADDRESS", key: "ADDRESS", width: 15 },
      { header: "POSITION", key: "POSITION", width: 15 },
    ];
    // Populate the worksheet with data
    data.forEach((item) => {
      worksheet.addRow({
        CONNECTION: item.CONNECTION,
        NAME: item.NAME,
        WARD: item.WARD,
        ZONE: item.ZONE,
        ADDRESS: item.ADDRESS,
        POSITION: item.POSITION,
        // Map MongoDB fields to Excel columns
      });
    });

    // Save the Excel file to disk
    const buffer = await workbook.xlsx.writeBuffer();

    // Set response headers for downloading
    resp.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    resp.setHeader(
      "Content-Disposition",
      "attachment; filename=mongodb-data.XLSX"
    );

    // Send the XLSX file as a response
    resp.send(Buffer.from(buffer));
  } catch (error) {
    console.error("Error:", error);
    resp.status(500).send("Internal Server Error");
  }
});

// api to login

app.post("/Login", async (req, resp) => {
  if (req.body.Password && req.body.Email) {
    //user must enter both emil and password for login
    let result = await Author.findOne(req.body); //.select("-Password"); //select everthing except password
    if (result) {
      resp.send(result);
    } else {
      resp.send("0");
    }
  } else {
    resp.send("1");
  }
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
