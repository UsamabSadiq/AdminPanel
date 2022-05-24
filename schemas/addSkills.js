const mongoose = require("mongoose")

const AddSkills = new mongoose.Schema({
    SkillName : {type:String,required:true},
    SkillValue : {type:String,required:true},
},{
    collection: "AddSkills", timestamps: true
})

const model = mongoose.model("AddSkills", AddSkills)

module.exports = model