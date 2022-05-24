const mongoose = require("mongoose")

const AddEdu = new mongoose.Schema({
    InsName: { type: String, required: true },
    Deg: { type: String, required: true },
    StartDate: { type: String, required: true },
    EndDate: { type: String, required: true },
    Field: { type: String, required: true },
    Grade: { type: String, required: true },

}, {
    collection: "AddEducation", timestamps: true
})

const model = mongoose.model("AddEducation", AddEdu)

module.exports = model