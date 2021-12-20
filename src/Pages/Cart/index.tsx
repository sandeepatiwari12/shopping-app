import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { formatPrice } from '@utils/price-format';
import Button from '@mui/material/Button';
// Redux
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '@store/Actions/cartActions';
import { IProduct, RootState } from '@store/type';
// Component
import Flex from "@components/Flex";
import Loader from '@components/Loader';
import CartItem from '@components/CartItem';
import { StyledLink } from '@components/CartButton';
import { Para, StyledFlex } from '@pages/Shipping';

interface CartProps {
    loading: boolean;
    cartItems: IProduct[];
    removeFromCart: (id: string) => void;
    addToCart: (product: IProduct) => void;
}


const NoItemInCart = () => <Typography component={'h2'}>Your cart is empty.</Typography>;

function Cart({ loading, cartItems, addToCart, removeFromCart }: CartProps) {
    const currency: string = 'USD';
    const [payable, setAmount] = useState<number>(0);
    const [shipping, setShipping] = useState<number>(0);
    const [tax, setTax] = useState<number>(0);


    useEffect(() => {
        let amount: number = 0;
        let shipping: number = 0;
        let tax: number = 0;
        cartItems.forEach((p: IProduct) => {
            amount += p.total;
            shipping += p.shippingPrice;
        });
        setAmount(amount);
        setShipping(shipping);
        setTax(tax);
    }, [setAmount, setShipping, setTax, cartItems]);

    const onRemoveFromCart = (id: string) => {
        removeFromCart(id)
    }
    const onAddOrRemove = (product: IProduct) => {
        addToCart(product)
    }
    return (
        <Box>
            {loading && <Loader />}
            {cartItems && cartItems.length < 1
                ? <NoItemInCart />
                : (
                    <Flex flexDirection={'column'}>
                        <>
                            {cartItems.map((product: IProduct, index: number) => (
                                <Box key={`${product.id}__${index}`} marginBottom={3}>
                                    <CartItem product={product}
                                        onRemoveFromCart={(id) => onRemoveFromCart(id)}
                                        onAddOrRemove={(product: IProduct) => { onAddOrRemove(product) }} />
                                </Box>
                            ))}
                            <Flex padding={2} justifyContent={'space-around'}>
                                <Box width={1 / 3} padding={2}>
                                    <StyledFlex>
                                        <Para>Shipping:</Para>
                                        <Para>{formatPrice(currency, shipping)}</Para>
                                    </StyledFlex>
                                    <StyledFlex>
                                        <Para>Tax: </Para>
                                        <Para>{formatPrice(currency, tax)}</Para>
                                    </StyledFlex>
                                    <StyledFlex>
                                        <Para>Total:</Para>
                                        <Para>{formatPrice(currency, payable)}</Para>
                                    </StyledFlex>
                                    <StyledFlex>
                                        <Para>Grand Total:</Para>
                                        <Para>{formatPrice(currency, payable + shipping + tax)}</Para>
                                    </StyledFlex>
                                    <Flex padding={2} justifyContent={'space-around'}>
                                        <StyledLink to={'/shipping'}>
                                            <Button color='warning' variant='contained' size='large'>Proceed to checkout</Button>
                                        </StyledLink>
                                    </Flex>
                                </Box>
                            </Flex>
                        </>
                    </Flex>
                )}
        </Box>
    )
}

const mapStateToProps = (state: RootState) => ({
    loading: state.cart.loading,
    cartItems: state.cart.list
})
const mapDispatchToProps = {
    removeFromCart,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
