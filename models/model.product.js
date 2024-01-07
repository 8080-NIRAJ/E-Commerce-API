// Importing Mongoose library
import mongoose from 'mongoose';

// Creating a Mongoose schema for the product
const productSchema = new mongoose.Schema({
  // Define the structure of the fields in the product schema
  id: {
    type: Number,
    required: true 
  },
  name: {
    type: String,
    required: true 
  },
  quantity: {
    type: Number,
    required: true
  }
});

// Creating a Mongoose model named 'Product' based on the 'productSchema'
const Product = mongoose.model('Product', productSchema);


export default Product;

