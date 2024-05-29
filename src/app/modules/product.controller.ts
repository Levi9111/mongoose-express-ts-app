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

const getAllPrducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllPrductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Products failed to fetch',
      error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Product failed to fetch',
      error,
    });
  }
};

const updateAProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedProductData = req.body;

    const result = await productServices.updateProductFromDB(
      productId,
      updatedProductData,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Product failed to update',
      error,
    });
  }
};

const deleteAProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await productServices.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Product could not be deleted!',
      error,
    });
  }
};

const searchAProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    if (!searchTerm || typeof searchTerm !== 'string')
      throw new Error('No search term');

    const result = await productServices.searchAProductFromDB(
      searchTerm.toLowerCase(),
    );
    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Product could not be found!',
      error,
    });
  }
};

const productController = {
  createPrduct: createProduct,
  getAllPrducts,
  getSingleProduct,
  deleteAProduct,
  updateAProduct,
  searchAProduct,
};

export default productController;
