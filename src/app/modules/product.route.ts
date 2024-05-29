import express, { Request, Response } from 'express';
import productController from './product.controller';

const router = express.Router();

router.post('/', productController.createPrduct);

router.get('/', (req: Request, res: Response) => {
  const { searchTerm } = req.query;
  if (typeof searchTerm === 'string' && searchTerm.trim() !== '') {
    return productController.searchAProduct(req, res);
  } else {
    return productController.getAllPrducts(req, res);
  }
});

// router.get('/', productController.getAllPrducts);
// router.get('/', productController.searchAProduct);

router.get('/:productId', productController.getSingleProduct);

router.delete('/:productId', productController.deleteAProduct);

router.put('/:productId', productController.updateAProduct);

export const ProductRoutes = router;
