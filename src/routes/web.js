const express = require("express");
const {
  getHomepage,
  getCategory,
  getShop,
  getNews,
  getContact,
  getAbout,
  getWishList,
  getLogin,
  getCompare,
  getCart,
  getRegister,
} = require("../controllers/homeController");
const router = express.Router();
router.get("/", getHomepage);
router.get("/cms-category", getCategory);
router.get("/shop", getShop);
router.get("/news", getNews);
router.get("/contact", getContact);
router.get("/about-us", getAbout);
router.get("/wish-list", getWishList);
router.get("/customer/login", getLogin);
router.get("/compare", getCompare);
router.get("/cart", getCart);
router.get("/customer/register", getRegister);

module.exports = router;
