const router = require("express").Router();
const listingRoutes = require("./listings");
const user = require("./user");
const profileRoutes = require("./profile");

// Listing routes
router.use("/listings", listingRoutes);
router.use("/profile", profileRoutes);
router.use("/user", user);

module.exports = router;
