export type TOrder = {
  productId: string;
  email: string;
  price: number;
  quantity: number;
  isDeleted?: boolean | undefined;
};
