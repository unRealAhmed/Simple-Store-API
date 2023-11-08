const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide the product name.'],
  },
  price: {
    type: Number,
    required: [true, 'Please specify the product price.'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    required: [true, 'Please provide the product company.'],
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: 'Company name must be one of: ikea, liddy, caressa, marcos.',
    },
  },
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product