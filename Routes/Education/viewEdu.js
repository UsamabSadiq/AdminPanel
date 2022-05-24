const express = require('express')
const AddEdu = require("../../schemas/addEdu");
const mongoose = require("mongoose");

const router = express.Router()

router.get("/viewEdu", async (req, res) => {
    let education
    await AddEdu.find()
        .then((result) => {
            education = result
        })
        .catch((error) => {
            console.log(error);
        })

    res.render("Education/viewEdu", { title: "View Education", education })
})

// Deleting Data from DB
router.get("/viewEdu/delete/:id", (req, res) => {
    let id
    id = req.params.id
    AddEdu.findByIdAndDelete(id)
        .then((result) => {
            console.log('Deleted')
            res.redirect('/viewEdu')
        })
        .catch((err) => {
            console.log('Error', err);
        })
})
// Finding skill using id
router.get("/viewEdu/edit/:id", async (req, res) => {
    let id
    id = req.params.id
    let education
    await AddEdu.findById(id)
        .then((result) => {
            education = result
        })
        .catch((err) => {
            console.log(err);
        })
    res.render("Education/updateEdu", { title: "Edit Education Data", education })
})
// updating education using id
router.post("/viewEdu/edit/:id", async (req, res) => {
    let id
    id = req.params.id
    let updateEdu
    await AddEdu.findByIdAndUpdate(id, {
        InsName: req.body.InsName,
        Deg: req.body.Deg,
        StartDate: req.body.StartDate,
        EndDate: req.body.EndDate,
        Field: req.body.Field,
        Grade: req.body.Grade
    })
        .then((result) => {
            updateEdu = result
            console.log("Updated");
            res.redirect("/viewEdu")
        })
        .catch((err) => {
            console.log(err);
        })
})
module.exports = router