const express = require('express')
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const main = express()
const env = require("dotenv")

env.config()

const port = process.env.PORT


// Importing Routes
const home = require('./Routes/index')
const addServices = require('./Routes/Services/addServices')
const viewservices = require('./Routes/Services/viewServices')
const addExper = require('./Routes/Experience Routes/addExper')
const viewExper = require('./Routes/Experience Routes/viewExper')
const addBio = require('./Routes/Bio Data/addBio')
const viewBio = require('./Routes/Bio Data/viewBio')
const addSkill = require('./Routes/skills/addSkill')
const viewSkill = require('./Routes/skills/viewSkill')
const addEdu = require('./Routes/Education/addEdu')
const viewEdu = require('./Routes/Education/viewEdu')
const addCert = require('./Routes/Certification/addCert')
const viewCert = require('./Routes/Certification/viewCert')

// const navbar = require('./Routes/navbar')

// Setting View Engine
main.set('view engine', 'ejs')

// Use below line for showing files in public folder to browser like css 7 javascript. 
main.use(express.static("public"))

// Using Body Parser
main.use(bodyparser.urlencoded({ extended: true }))
main.use(bodyparser.json())

// Establish Connection With Database
const dbURI = process.env.MONGODB_URI

// Connecting With Database
// Agr connection ma koi masla ho tw iss liye hum promise use kr ty ha, agr koi error ho tw console ma throw kr dy.
mongoose.connect(dbURI)
    .then((result) => {
        main.listen(port, () => {
            console.log(`Server is Started at ${port} & DB is Connected`);
        })
    })
    .catch((err) => {
        console.log("Failed to Connect DB", err)
    })


main.use('/', home)
main.use('/', addServices)
main.use('/', viewservices)
main.use('/', addExper)
main.use('/', viewExper)
main.use('/', addBio)
main.use('/', viewBio)
main.use('/', addSkill)
main.use('/', viewSkill)
main.use('/', addEdu)
main.use('/', viewEdu)
main.use('/', addCert)
main.use('/', viewCert)

// main.use('/', navbar)