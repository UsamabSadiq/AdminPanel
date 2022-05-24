const express = require('express')

const router = express.Router()
// importing Schema into routes
const Cert = require("../../schemas/addCert");

router.get("/addCert", (req, res) => {
    res.render("Certification/addCert", { title: "Add Certifications" })
})
// sending data to DB
router.post('/addCert', async (req, res) => {
    let CertName = req.body.CertName
    let Issuer = req.body.Issuer
    let DateofIssue = req.body.DateofIssue
    // Storing data into single variable  
    let CERT = new Cert({
        CertName,
        Issuer,
        DateofIssue
    })
    await CERT.save()
        .then((result) => {
            console.log('Successfully Completed')
            res.redirect("/addCert")
        })
        .catch((err) => {
            console.log(err);
        })
})
module.exports = router