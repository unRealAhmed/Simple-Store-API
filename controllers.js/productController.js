const asyncHandler = require('../utilities/asyncHandler')


exports.getAllProductsStatic = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: 'All Static Products'
  })
})
exports.getAllProducts = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: 'All Products'
  })
}) 