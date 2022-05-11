const router = require("express").Router();

const UserModel = require("../models/User.model.js");
const bcrypt = require('bcryptjs');
const bcryptjs = require("bcryptjs");


router.get("/signup", (req, res, next) => {
    res.render("login/signup.hbs")
})

router.post("/signup", async (req, res, next) => {

    const {
        username,
        password
    } = req.body
    console.log(req.body)

    /*  if(!  username || !password){
          res.render("login/singup.hbs")
      } */

    try {
        const salt = await bcryptjs.genSalt(12)
        const hashPassword = await bcryptjs.hash(password, salt)

        const createUser = await UserModel.create({
            username,
            password: hashPassword
        })

        res.redirect("/user/login") //! nos falta la ruta

    } catch {
        (err) => next(err)
    }

})


router.get("/login", (req, res, next) => {
    res.render("login/login.hbs")
})


router.post("/login", async (req, res, next) => {
    const {
        username,
        password
    } = req.body
    
    try {
        const foundUser = await UserModel.findOne({
            username: username
        })
        console.log(foundUser)

        if(foundUser.admin === true){
            req.app.locals.isAdmin = true;
        } else {
            req.app.locals.isAdmin = false;
        }

        const passwordCheck = await bcryptjs.compare(password, foundUser.password)
       
        if(!passwordCheck){
            res.redirect("/user/login")
            return; 
        }
        req.session.user = foundUser; 
        req.app.locals.userIsActive = true;
       
        res.redirect("/main")          

    } catch {
        (err) => next(err)
    }

})


module.exports = router;