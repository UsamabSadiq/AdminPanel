// Making Route for register page
const express = require('express')
const Service = require("../../schemas/addservices")

const router = express.Router()

// Route for rendering Register page
router.get('/addservices', (req, res) => {
    res.render("Services/addservices", { title: "Add Services" })
})

// Route for posting data on the database
router.post("/addservices", async (req, res) => {
    let ServiceName = req.body.ServiceName
    let ServiceDesc = req.body.ServiceDesc
    let isDeleted = 'false'

    // Storing data into single variable  
    let SERVICES = new Service({
        ServiceName,
        ServiceDesc,
        isDeleted
    })
    await SERVICES.save()
        .then((result) => {
            console.log("SuccessFully Completed")
            res.render("response", { title: "Response" })
        })
        .catch((err) => {
            console.log("Failed");
        })
})

module.exports = router