import { z } from 'zod';

// Variant schema
const variantSchema = z.object({
  type: z.string({
    required_error: 'Variant type is required',
  }),
  value: z.string({
    required_error: 'Variant value is required',
  }),
});

// Inventory schema
const inventorySchema = z.object({
  quantity: z.number({
    required_error: 'Inventory quantity is required',
  }),
  inStock: z.boolean({
    required_error: 'Inventory inStock status is required',
  }),
});

// Product schema
const productValidationSchema = z.array(
  z.object({
    name: z
      .string({
        required_error: 'Product name is required',
      })
      .trim(),
    description: z
      .string({
        required_error: 'Product description is required',
      })
      .trim(),
    price: z.number({
      required_error: 'Product price is required',
    }),
    category: z
      .string({
        required_error: 'Product category is required',
      })
      .trim(),
    tags: z.array(z.string()).min(1, 'Product must have at least one tag'),
    variants: z.array(variantSchema),
    inventory: inventorySchema,
  }),
);

export default productValidationSchema;
