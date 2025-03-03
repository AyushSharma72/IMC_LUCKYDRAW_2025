const  mongoose =  require("mongoose");

const DetailsSchema = new mongoose.Schema(
{ // all schema will be different for different collection
  
   SR_NO:Number
},
{
    collection: 'PropertyAdvance'
}
);

module.exports = mongoose.model('PropertyAdvance', DetailsSchema);
