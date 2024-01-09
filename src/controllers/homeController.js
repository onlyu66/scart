const getHomepage = (req, res) => {
  res.send("Homepage!!!");
};
const getCategory = (req, res) => {
  res.send("Categories!!!");
};
const getShop = (req, res) => {
  res.send("Shop!!!");
};
const getNews = (req, res) => {
  res.send("Blogs!!!");
};
const getContact = (req, res) => {
  res.send("Contacts!!!");
};
const getAbout = (req, res) => {
  res.send("About us!!!");
};
const getWishList = (req, res) => {
  res.send("Wish List!!!");
};
const getLogin = (req, res) => {
  res.send("Login!!!");
};
const getRegister = (req, res) => {
  res.send("Register!!!");
};
const getCompare = (req, res) => {
  res.send("Compare!!!");
};
const getCart = (req, res) => {
  res.send("Cart!!!");
};
module.exports = {
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
};
