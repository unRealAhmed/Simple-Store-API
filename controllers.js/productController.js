const asyncHandler = require('../utilities/asyncHandler');
const APIfeatures = require('../utilities/apiFeatures');
const Product = require('../models/productModel');
const AppError = require('../utilities/appErrors');

// Get all products
exports.getAllProducts = asyncHandler(async (req, res, next) => {
  const features = new APIfeatures(Product.find(), req.query)
    .filter()
    .sort()
    .paginate()
    .selectFields();

  const products = await features.query;

  res.status(200).json({
    status: 'success',
    results: products.length,
    products,
  });
});

// Get a single product by ID
exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new AppError('No product found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    product,
  });
});

// Create a new product
exports.createProduct = asyncHandler(async (req, res, next) => {
  const newProduct = await Product.create(req.body);

  res.status(201).json({
    status: 'success',
    newProduct,
  });
});

// Update an existing product by ID
exports.updateProduct = asyncHandler(async (req, res, next) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedProduct) {
    return next(new AppError('No product found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    updatedProduct,
  });
});

// Delete a product by ID
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);

  if (!deletedProduct) {
    return next(new AppError('No product found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
