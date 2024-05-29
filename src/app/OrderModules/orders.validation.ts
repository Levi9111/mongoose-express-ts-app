import { z } from 'zod';

const orderValidationSchema = z.array(
  z.object({
    productId: z.string({
      required_error: 'Product Id is required',
    }),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email({ message: 'Invalid email address' }),
    price: z.number({
      required_error: 'Price is required',
    }),
    quantity: z.number({
      required_error: 'Quantity is required',
    }),
    isDeleted: z.boolean().default(false).optional(),
  }),
);

export default orderValidationSchema;
