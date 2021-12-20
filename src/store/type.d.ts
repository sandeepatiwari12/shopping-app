import store from "@store";
interface IAction {
  type: string;
  payload: any;
  error: string;
}
interface IProduct {
  currency: string;
  description: string;
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  shippingPrice: number;
  quantity?: number;
  total?: number;
}

type RootState = ReturnType<typeof store.getState>;
type DispatchType = typeof store.dispatch;
