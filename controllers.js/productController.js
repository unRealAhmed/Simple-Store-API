const asyncHandler = require('../utilities/asyncHandler')
const APIfeatures = require('../utilities/apiFeatures')
const Product = require('../models/productModel')


exports.getAllProductsStatic = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: 'All Static Products'
  })
})
exports.getAllProducts = asyncHandler(async (req, res, next) => {

  const features = new APIfeatures(Product.find(), req.query)
    .filter()
    .sort()
    .paginate()
    .selectFields()

  const products = await features.query

  res.status(200).json({
    status: 'success',
    results: products.length,
    products
  })
}) 