const mongoose = require("mongoose")

const AddServices = new mongoose.Schema({
    ServiceName: { type: String, required: true },
    ServiceDesc: { type: String, required: true },
    isDeleted: { type: String, required: true }
}, {
    collection: "AddServices", timestamps: true
})

const model = mongoose.model("AddServices", AddServices)

module.exports = model