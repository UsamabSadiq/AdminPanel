const express = require('express')

const router = express.Router()
// importing Schema into routes
const AddEdu = require("../../schemas/addEdu");

router.get("/addEdu", (req, res) => {
    res.render("Education/addEdu", { title: "Add Education" })
})

// Route for posting data on the database
router.post('/addEdu', async (req, res) => {
    let InsName = req.body.InsName
    let Deg = req.body.Deg
    let StartDate = req.body.StartDate
    let EndDate = req.body.EndDate
    let Field = req.body.Field
    let Grade = req.body.Grade

    // Storing data into single variable  
    let EDU = new AddEdu({
        InsName,
        Deg,
        StartDate,
        EndDate,
        Field,
        Grade
    })
    await EDU.save()
        .then((result) => {
            console.log('Successfully Completed')
            res.redirect("/addEdu")
        })
        .catch((err) => {
            console.log('Failed');
        })
})

module.exports = router