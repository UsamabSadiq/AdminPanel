const mongoose = require("mongoose")

const AddBio = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    DateofBirth: { type: String, required: true },
    Email: { type: String, required: true },
    Education: { type: String, required: true },
    Profession: { type: String, required: true },
    Address: { type: String, required: true },
    Experience: { type: String, required: true },
    PhoneNo: { type: String, required: true }

}, {
    collection: "AddBioData", timestamps: true
})

const model = mongoose.model("AddBioData", AddBio)

module.exports = model