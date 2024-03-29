const router = require("express").Router();
const multer = require("multer");
var fs = require('fs');
const { createUser, login, uploadProfilePicture, sendProfilePicture, sendUserBadges, userDetails, checkLoggedIn, logout, userVisitedLocations, scanVisitedLocation } = require("./users.controller");
const upload = multer({ dest: "api/users/uploads/" });


router.post("/registration", createUser);
router.post("/login", login);
router.put("/upload", upload.single("profile_picture"), uploadProfilePicture);
router.get("/profile-picture", sendProfilePicture);
router.get("/badges", sendUserBadges);
router.get("/details", userDetails);
router.get("/isLoggedIn", checkLoggedIn);
router.get("/logout", logout);
router.get("/locations", userVisitedLocations);
router.post("/userScan", scanVisitedLocation);

module.exports = router;