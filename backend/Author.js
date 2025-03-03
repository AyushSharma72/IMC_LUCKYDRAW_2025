const  mongoose =  require("mongoose");

const DetailsSchema = new mongoose.Schema(
{ // all schema will be different for different collection
  
   Name:String
},
{
    collection: 'Authorized'
}
);

module.exports = mongoose.model("Authorized", DetailsSchema);
