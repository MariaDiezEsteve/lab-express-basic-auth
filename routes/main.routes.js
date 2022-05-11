const router = require("express").Router();

const isLoggedIn = require("../middlewares/isLoggedIn.js")
const isAdmin = require("../middlewares/isAdm.js")


router.get("/", isLoggedIn,(req, res, next) => {
    res.render("login/main.hbs")
})

router.get("/private", isAdmin,(req, res, next) => {
    res.render("login/private.hbs")
})



module.exports = router;


