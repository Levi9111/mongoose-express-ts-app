import { TProduct } from './product.interface';
import Product from './product.model';

const createPrductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);

  return result;
};

const getAllPrductsFromDB = async () => {
  return await Product.find();
};

const getSingleProductFromDB = async (id: string | number) => {
  return await Product.findOne({ _id: id });
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.updateOne(
    { _id: id },
    { $set: { isDeleted: true } },
  );
  return result;
};

const searchAProductFromDB = async (searchTerm: string) => {
  const products = await Product.find({
    $or: [
      { name: { $regex: searchTerm, $options: 'i' } },
      { description: { $regex: searchTerm, $options: 'i' } },
    ],
  }).exec();

  return products;
};

// TODO:update data
const updateProductFromDB = async (
  productId: string,
  updatedProductData: TProduct,
) => {
  const result: TProduct | null = await Product.findByIdAndUpdate(
    productId,
    { $set: { ...updatedProductData } },
    { new: true, runValidators: true },
  );

  return result;
};

const productServices = {
  createPrductIntoDB,
  getAllPrductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductFromDB,
  searchAProductFromDB,
};

export default productServices;
