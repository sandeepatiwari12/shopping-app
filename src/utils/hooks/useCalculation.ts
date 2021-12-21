import { IProduct } from "@store/type";
import { useState } from "react";

const useCalculation = () => {
  const currency: string = "USD";
  const [payable, setAmount] = useState<number>(0);
  const [shipping, setShipping] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [items, setItems] = useState<number>(0);

  const setValue = (cartItems: IProduct[]) => {
    let amount: number = 0;
    let shipping: number = 0;
    let tax: number = 0;
    let quantities: number = 0;
    cartItems.forEach((p: IProduct) => {
      amount += p.total;
      shipping += p.shippingPrice;
      quantities += p.quantity;
    });
    setAmount(amount);
    setShipping(shipping);
    setTax(tax);
    setItems(quantities);
  };

  return {currency, payable, shipping, tax, items, setValue};
};
export default useCalculation;
