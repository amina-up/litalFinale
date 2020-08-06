


    module.exports = function(req, res, next) {
        if (req.user.role !== "Admin") return res.status(401).send("Access réfusé");
        next();
      };