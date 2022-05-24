const express = require('express')
const Cert = require("../../schemas/addCert");
const mongoose = require("mongoose");

const router = express.Router()

router.get("/viewCert", async (req, res) => {
    let certificate
    await Cert.find()
        .then((result) => {
            certificate = result
        })
        .catch((error) => {
            console.log(error);
        })
    res.render("Certification/viewCert", { title: "View Certifications", certificate })
})
// Deleting data from DB
router.get("/viewCert/delete/:id", (req, res) => {
    let id
    id = req.params.id
    Cert.findByIdAndDelete(id)
        .then((result) => {
            console.log('Deleted')
            res.redirect('/viewCert')
        })
        .catch((err) => {
            console.log('Error', err);
        })
})
// Finding skill using id
router.get("/viewCert/edit/:id", async (req, res) => {
    let id
    id = req.params.id
    let certificate
    await Cert.findById(id)
        .then((result) => {
            certificate = result
        })
        .catch((err) => {
            console.log(err);
        })
    res.render("Certification/updateCert", { title: "Edit Certifications", certificate })
})
// updating skill using id
router.post("/viewCert/edit/:id", async (req, res) => {
    let id
    id = req.params.id
    let updatecert
    await Cert.findByIdAndUpdate(id, {
        CertName: req.body.CertName,
        Issuer: req.body.Issuer,
        DateofIssue: req.body.DateofIssue

    })
        .then((result) => {
            updatecert = result
            console.log("Updated");
            res.redirect("/viewCert")
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router