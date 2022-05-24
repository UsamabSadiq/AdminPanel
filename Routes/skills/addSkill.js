const express = require('express')
const router = express.Router()
// importing schema into routes
const Skill = require("../../schemas/addSkills")

router.get('/addskill', (req,res)=>{
    res.render('skills/addskill', {title: 'Add Skills'})
})
router.post("/addskill" , async (req,res)=>{
    let SkillName = req.body.skillname
    let SkillValue = req.body.skillvalue
// sending data to DB
    let SKILL = new Skill({
        SkillName,
        SkillValue,
    })
    await SKILL.save()
    .then((result)=>{
        console.log("SuccessFully Completed")
        res.redirect("/addskill")
    })
    .catch((err)=>{
        console.log("Failed");
    })
})
module.exports = router