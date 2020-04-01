const router = require("express").Router();
const listingRoutes = require("./listings");
const user = require("./user")

// Listing routes
router.use("/listings", listingRoutes);
router.use("/user", user)

module.exports = router;
