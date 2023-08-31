const express = require("express");
const { getAllProducts, 
        getAdminProducts,
        createProduct,
        updateProduct, 
        deleteproduct, 
        getProductDetails, 
        createProductReview, 
        getProductReviews, 
        deletereview } = require("../controllers/productcontroller");
const { isAuthenticated, authorizeRoles } = require("../middleware/auth");

const router=express.Router();


router.route("/products").get( getAllProducts);

router.route("/admin/products").get(isAuthenticated, authorizeRoles("admin"), getAdminProducts);

router
    .route("/admin/product/new")
    .post(isAuthenticated, authorizeRoles("admin"), createProduct);

router.route("/admin/product/:id")
    .put(isAuthenticated, authorizeRoles("admin"), updateProduct)
    .delete(isAuthenticated, authorizeRoles("admin"), deleteproduct)
    
router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticated, createProductReview);

router.route("/reviews").get(getProductReviews).delete(isAuthenticated, deletereview)

module.exports = router