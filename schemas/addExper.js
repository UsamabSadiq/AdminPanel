const mongoose = require("mongoose")

const AddExper = new mongoose.Schema({
    OccuName: { type: String, required: true },
    CompName: { type: String, required: true },
    StartYear: { type: String, required: true },
    EndYear: { type: String, required: true },
    Desc: { type: String, required: true },

}, {
    collection: "Add Experience", timestamps: true
})

const model = mongoose.model("Add Experience", AddExper)

module.exports = model