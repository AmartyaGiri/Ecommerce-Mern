const express = require("express");
const { registerUser,
     loginUser,
     logout,
     forgotPassword,
     resetPassword,
     getUserDetails,
     updateUserPassword,
     updateProfile, 
     getAllUser,
     getSingleUser,
     updateUserRole,
     deleteUser} = require("../controllers/userController");
const {isAuthenticated, authorizeRoles} = require("../middleware/auth");
const router = express.Router();


router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticated, getUserDetails);

router.route("/me/update").put(isAuthenticated, updateProfile);

router.route("/password/update").put(isAuthenticated, updateUserPassword);

// admin routes
 router.route("/admin/users").get(isAuthenticated, authorizeRoles("admin"), getAllUser);

 router
    .route("/admin/user/:id")
    .get(isAuthenticated, authorizeRoles("admin"), getSingleUser)
    .put(isAuthenticated,authorizeRoles("admin"),updateUserRole)
    .delete(isAuthenticated,authorizeRoles("admin"),deleteUser);

module.exports = router;