const mongoose = require("mongoose");

const winnerSchema = new mongoose.Schema(
    { // all schema will be different for different collection

        PARTNER: String,
        PROPERTY_OWNER_NAME: String,
        WARD: Number,
        ZONE: Number,
        ASSMENTYEAR: String,
        TAX_AMT: String,
        SR_NO: Number,
        POSITION: String

    },
    {
        collection: "Winners"
        
    }

);


module.exports = mongoose.model("Winners", winnerSchema);
