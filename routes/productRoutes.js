const express = require('express')
const { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers.js/productController')

const router = express.Router()

router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct)

module.exports = router
