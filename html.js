const router = require("express").Router()
var path = require("path");

//retrieves main page
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"./public/index.html"))
})

//retrieves exercise page
router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname,"./public/exercise.html"))
})

//retrieves stats page
router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname,"./public/stats.html"))
})

module.exports = router