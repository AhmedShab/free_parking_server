module.exports = {

  // route middleware to ensure user is logged in
   isLoggedIn: function(req, res, next) {
     console.log("I'm authanticating...");
     console.log(req.isAuthenticated());
    if (req.isAuthenticated())
    return next();

    res.redirect('/');
  }
};
