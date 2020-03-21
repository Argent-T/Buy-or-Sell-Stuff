const router = require("express").Router();
const listingRoutes = require("./listings");
const imageRoutes = require("./images")
// Listing routes
router.use("/listings", listingRoutes);
router.use("/images", imageRoutes);

module.exports = router;
