const mongoose = require("mongoose")

const AddCert = new mongoose.Schema({
    CertName : {type:String,required:true},
    Issuer : {type:String,required:true},
    DateofIssue : {type:String,required:true},

},{
    collection: "AddCertification", timestamps: true
})

const model = mongoose.model("AddCertification", AddCert)

module.exports = model