const fs = require('fs');
require('dotenv').config({ path: './config.env' });
const Product = require('./models/productModel');
const connectDatabase = require('./utilities/dataBase');

const productsData = JSON.parse(fs.readFileSync(`${__dirname}/products.js`, 'utf-8'))

connectDatabase();

const importData = async () => {
  try {
    await Product.create(productsData)
    console.log(`Data Loaded Successfully👍`);
  } catch (err) {
    console.log(err);
  }
  process.exit()
}

const deleteData = async () => {
  try {
    await Product.deleteMany()
    console.log(`Data Deleted Succefully👍`);
  } catch (err) {
    console.log(err);
  }
  process.exit()
}

if (process.argv[2] === '--import') {
  importData()
} else if (process.argv[2] === '--delete') {
  deleteData()
}
