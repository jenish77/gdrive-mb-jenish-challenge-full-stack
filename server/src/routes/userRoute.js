const express = require("express");
const router = express.Router();
const UserController = require("../controller/usercontroller");


router.get('/auth/google', UserController.authGoogle);
router.get('/google/redirect', UserController.googleRedirect);
// router.get('/revoke-access', UserController.revokeAccess);



module.exports = router