const router = require("express").Router();
const controller = require("../../controllers/imageController");
const imageController = controller.controller;


router.route("/")
.get(imageController.findAll)

  

module.exports = router; 