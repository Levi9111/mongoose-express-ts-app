import { Schema, model } from 'mongoose';
import { TInventory, TProduct, TVariant } from './product.interface';

const variantSchema = new Schema<TVariant>({
  type: {
    type: String,
    required: true,
    trim: true,
  },
  value: {
    type: String,
    required: true,
    trim: true,
  },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

// main Product schema
const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    trim: true,
  },
  tags: {
    type: [String],
    required: true,
    validate: [
      (tags: string[] | number[]) => tags.length > 0,
      'Product must have at least one tag',
    ],
  },
  variants: [variantSchema],
  inventory: {
    type: inventorySchema,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

productSchema.pre('find', async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre('findOne', async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// Create the Product model
const Product = model('Product', productSchema);

export default Product;
