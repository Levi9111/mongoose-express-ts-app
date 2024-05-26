import { Request, Response } from 'express';
import productValidationSchema from './product.validation';
import productServices from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product } = req.body;
    console.log(product);

    const validatedProduct = productValidationSchema.parse(product);

    const result = await productServices.createPrductIntoDB(validatedProduct);
    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Product creation failed',
      error,
    });
  }
};

const getAllPrducts = () => {};

const getSingleProduct = () => {};

const deleteAProduct = () => {};

const updateAProduct = () => {};

const searchAProduct = () => {};

const productController = {
  createPrduct: createProduct,
  getAllPrducts,
  getSingleProduct,
  deleteAProduct,
  updateAProduct,
  searchAProduct,
};

export default productController;
