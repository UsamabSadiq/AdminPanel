const express = require('express')
const mongoose = require("mongoose");
const Bio = require("../../schemas/addBio");

const router = express.Router()

// Route for rendering data viewBio page 
router.get("/viewBio", async (req, res) => {
    let biodata;
    await Bio.find()
        .then((result) => {
            biodata = result
        })
        .catch((error) => {
            console.log(error)
        })
    res.render("Bio Data/viewBio", { title: "View Bio Data", biodata })
})
// Deleting data from DB
router.get("/viewBio/delete/:id", (req, res) => {
    let id
    id = req.params.id
    Bio.findByIdAndDelete(id)
        .then((result) => {
            console.log('Deleted')
            res.redirect('/viewBio')
        })
        .catch((err) => {
            console.log('Error', err);
        })
})
// Finding Bio using id
router.get("/viewBio/edit/:id", async (req, res) => {
    let id
    id = req.params.id
    let biodata
    await Bio.findById(id)
        .then((result) => {
            biodata = result
        })
        .catch((err) => {
            console.log(err);
        })
    res.render("Bio Data/updateBio", { title: "Edit Bio Data", biodata })
})
// updating Bio using id
router.post("/viewBio/edit/:id", async (req, res) => {
    let id
    id = req.params.id
    let updatebio
    await Bio.findByIdAndUpdate(id, {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        DateofBirth: req.body.DateofBirth,
        Email: req.body.Email,
        Education: req.body.Education,
        Profession: req.body.Profession,
        Address: req.body.Profession,
        Experience: req.body.Experience,
        PhoneNo: req.body.PhoneNo

    })
        .then((result) => {
            updatebio = result
            console.log("Updated");
            res.redirect("/viewBio")
        })
        .catch((err) => {
            console.log(err);
        })
})
module.exports = router