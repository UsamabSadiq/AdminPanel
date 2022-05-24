// Making Route for register page
const express = require("express");
const Skill = require("../../schemas/addSkills");
const mongoose = require("mongoose");

const router = express.Router();

// Route for rendering viewSkill page
router.get("/viewskill", async (req, res) => {
  let skill;
  //   await k baad jo skiil variable ha wo oper sa mongoose ka schema variable ha 
  await Skill.find()
    .then((result) => {
      // console.log(result);
      skill = result;
      // console.log(services,"Services")
    })
    .catch((error) => {
      console.log(error);
    });
  res.render("skills/viewSkill", { title: "View Skill", skill });
});

// deleting data from DB
router.get("/viewskill/delete/:id", (req, res) => {
  let id
  id = req.params.id
  Skill.findByIdAndDelete(id)
    .then((result) => {
      console.log("Deleted");
      res.redirect("/viewskill")
    })
    .catch((err) => {
      console.log("Error", err);
    })
})
// Finding skill using id
router.get("/viewskill/edit/:id", async (req, res) => {
  let id
  id = req.params.id
  let skill
  await Skill.findById(id)
    .then((result) => {
      skill = result
    })
    .catch((err) => {
      console.log(err);
    })
  res.render("skills/updateSkill", { title: "Edit Skill", skill })
})
// updating skill using id
router.post("/viewskill/edit/:id", async (req, res) => {
  let id
  id = req.params.id
  let updateskill
  await Skill.findByIdAndUpdate(id, {
    SkillName: req.body.SkillName,
    SkillValue: req.body.SkillValue
  })
    .then((result) => {
      updateskill = result
      console.log("Updated");
      res.redirect("/viewskill")
    })
    .catch((err) => {
      console.log(err);
    })
})

module.exports = router;
