import express from 'express';
import productController from './product.controller';

const router = express.Router();

router.post('/', productController.createPrduct);

router.get('/', productController.getAllPrducts);

router.get('/:productId', productController.getSingleProduct);

router.delete('/:productId', productController.deleteAProduct);

router.put('/:productId', productController.updateAProduct);

// TODO: create the search params query

export const ProductRoutes = router;
