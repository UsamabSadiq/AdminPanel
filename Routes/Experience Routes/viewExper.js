const express = require('express')
const AddExper = require("../../schemas/addExper");
const mongoose = require("mongoose");

const router = express.Router()

router.get("/ViewExper", async (req, res) => {
    let exper
    await AddExper.find()
        .then((result) => {
            exper = result
            // console.log(exper);
        })
        .catch((error) => {
            console.log(error);
        })
    res.render("Experience/viewExper", { title: "View Experience", exper })
})
// Deleting data from DB
router.get("/viewExper/delete/:id", (req, res) => {
    let id
    id = req.params.id
    AddExper.findByIdAndDelete(id)
        .then((result) => {
            console.log('Deleted')
            res.redirect('/viewExper')
        })
        .catch((err) => {
            console.log('Error', err);
        })
})
// Finding skill using id
router.get("/viewExper/edit/:id", async (req, res) => {
    let id
    id = req.params.id
    let exper
    await AddExper.findById(id)
        .then((result) => {
            exper = result
        })
        .catch((err) => {
            console.log(err);
        })
    res.render("Experience/updateExper", { title: "Edit Experience", exper })
})
// updating skill using id
router.post("/viewExper/edit/:id", async (req, res) => {
    let id
    id = req.params.id
    let updateExper
    await AddExper.findByIdAndUpdate(id, {
        OccuName: req.body.OccuName,
        CompName: req.body.CompName,
        StartYear: req.body.StartYear,
        EndYear: req.body.EndYear,
        Desc: req.body.Desc,
    })
        .then((result) => {
            updateExper = result
            console.log("Updated");
            res.redirect("/viewExper")
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router