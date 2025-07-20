const express = require('express');
const {
  getProducts,
  
  createCollection,
  importToTypesense,
  searchProducts,
  deleteCollection,
  listCollections,
  getSingleProduct,
  createProducts,
 
} = require('../controller/ProductController');

const {isAuthenticatedUser, authorizedRoles}=require('../middlewares/authenticate');

const router = express.Router();

router.route('/product').get(isAuthenticatedUser,authorizedRoles('user'),getProducts);
router.route('/create').post(isAuthenticatedUser,authorizedRoles('user'),createProducts);
 

router.route('/product/search').get(searchProducts);

router.route('/product/create-collection').post(createCollection);
 router.route('/product/:id').get(getSingleProduct);

router.route('/product/import').get(importToTypesense);
router.route('/product/delete-collection').get(deleteCollection);
router.route('/product/list-collections').get(listCollections);

module.exports = router;
