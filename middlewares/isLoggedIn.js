const isLoggedIn = (req, res, next) =>{
    if(!req.session.user){
        res.redirect("/user/signup") 
        return;
    } else {
        next() 
    }
}

module.exports = isLoggedIn;