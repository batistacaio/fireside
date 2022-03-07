var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarioController');

router.get("/", function(req, res, next) {
  res.render("login", { title: "Login" });
});

router.post("/login", usuarioController.login);
router.post("/cadastrar", usuarioController.cadastrar);

module.exports = router;
