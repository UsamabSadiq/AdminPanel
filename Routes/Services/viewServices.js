// Making Route for register page
const express = require("express");
const Service = require("../../schemas/addservices");
const mongoose = require("mongoose");

const router = express.Router();

// Route for rendering viewServices page
router.get("/viewservices", async (req, res) => {
  let services;
  await Service.find()
    .then((result) => {
      // console.log(result);
      services = result;
      // console.log(services,"Services")
    })
    .catch((error) => {
      console.log(error);
    });
  res.render("Services/viewServices", { title: "View Services", services });
});

// Deleting Data from DB
router.get("/viewservices_content/delete/:id", (req, res) => {
  let id
  id = req.params.id
  Service.findByIdAndDelete(id)
    .then((result) => {
      console.log('Deleted')
      res.redirect('/viewservices')
    })
    .catch((err) => {
      console.log('Error', err);
    })
})
// Finding skill using id
router.get("/viewservices_content/edit/:id", async (req, res) => {
  let id
  id = req.params.id
  let services
  await Service.findById(id)
    .then((result) => {
      services = result
    })
    .catch((err) => {
      console.log(err);
    })
  res.render("Services/updateServices", { title: "Edit Services", services })
})
// updating services using id
router.post("/viewservices_content/edit/:id", async (req, res) => {
  let id
  id = req.params.id
  let updateServices
  await Service.findByIdAndUpdate(id, {
    ServiceName: req.body.ServiceName,
    ServiceDesc: req.body.ServiceDesc
  })
    .then((result) => {
      updateServices = result
      console.log("Updated");
      res.redirect("/viewservices")
    })
    .catch((err) => {
      console.log(err);
    })
})

module.exports = router;
