const express = require('express')
const router = express.Router()
// importing Schema into routes
const Bio = require("../../schemas/addBio");

router.get("/addBio", (req, res) => {
    res.render("Bio Data/addBio", { title: "Add Bio Data" })
})

// sending data to DB
router.post('/addBio', async (req, res) => {
    let FirstName = req.body.FirstName
    let LastName = req.body.LastName
    let DateofBirth = req.body.DateofBirth
    let Email = req.body.Email
    let Education = req.body.Education
    let Profession = req.body.Profession
    let Address = req.body.Address
    let Experience = req.body.Experience
    let PhoneNo = req.body.PhoneNo

    // Storing data into single variable  
    let BIO = new Bio({
        FirstName,
        LastName,
        DateofBirth,
        Email, Education, Profession, Address, Experience, PhoneNo
    })
    await BIO.save()
        .then((result) => {
            console.log('Successfully Completed')
            res.redirect("/addBio")
        })
        .catch((err) => {
            console.log('Failed');
        })
})
module.exports = router