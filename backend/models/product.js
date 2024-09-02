import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  weight: { type: String, required: true },  // Example: "500g", "1kg", etc.
  category: { type: String, required: true },
  images: { 
    type: [String],  // Array of image URLs or paths
    validate: [images => images.length >= 5, 'At least 5 images required'],
    required: true
  },
  rating: { 
    type: Number, 
    min: 0, 
    max: 5000,  // Rating score out of 5000
    default: 0  // Default to 0 if not provided
  },
  price: { type: Number, required: true },
  stock: { type: Number },  // Optional field
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;


