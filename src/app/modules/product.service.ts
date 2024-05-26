import { TProduct } from './product.interface';
import Product from './product.model';

const createPrductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);

  return result;
};

const getAllPrductsFromDB = async () => {
  return await Product.find();
};

const getSingleProductFromDB = async (id: string) => {
  return await Product.findOne({ id });
};

const deleteProductFromDB = async (id: string) => {
  return await Product.updateOne({ id }, { isDeleted: true });
};

const productServices = {
  createPrductIntoDB,
  getAllPrductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
};

export default productServices;
