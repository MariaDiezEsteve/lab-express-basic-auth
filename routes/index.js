const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

const userRoutes = require("./login.routes");
router.use("/user", userRoutes)

const mainRoutes = require("./main.routes");
router.use("/main", mainRoutes)





module.exports = router;
