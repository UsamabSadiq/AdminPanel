const express = require('express')

const router = express.Router()

// importing Schema into routes
const AddExper = require("../../schemas/addExper");

router.get("/addExper", (req, res) => {
    res.render("Experience/addExper", { title: "Add Experience" })
})
// sending data to DB
router.post('/addExper', async (req, res) => {
    let OccuName = req.body.OccuName
    let CompName = req.body.CompName
    let StartYear = req.body.StartYear
    let EndYear = req.body.EndYear
    let Desc = req.body.Desc
    // Storing data into single variable  
    let EXPER = new AddExper({
        OccuName,
        CompName,
        StartYear,
        EndYear,
        Desc
    })
    await EXPER.save()
        .then((result) => {
            console.log('Successfully Completed')
            res.redirect("/addExper")
        })
        .catch((err) => {
            console.log(err);
        })
})
module.exports = router