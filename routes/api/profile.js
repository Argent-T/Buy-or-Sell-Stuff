const router = require("express").Router();
const listingsController = require("../../controllers/listingsController");


// Matches with "/api/listings/:id"
router
  .route("/:id")
  .get(listingsController.findPurchased)
  .put(listingsController.update)
  .delete(listingsController.remove);

module.exports = router;