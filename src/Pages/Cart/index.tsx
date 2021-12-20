import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Redux
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '@store/Actions/cartActions';
import { IProduct, RootState } from '@store/type';
// Component
import Flex from "@components/Flex";
import Loader from '@components/Loader';
import CartItem from '@components/CartItem';
import { formatPrice } from '@utils/price-format';
interface CartProps {
    loading: boolean;
    cartItems: IProduct[];
    removeFromCart: (id: string) => void;
    addToCart: (product: IProduct) => void;
}

const NoItemInCart = () => <Typography component={'h2'}>Your cart is empty.</Typography>;

function Cart({ loading, cartItems, addToCart, removeFromCart }: CartProps) {
    const [payable, setAmount] = useState<number>(0);

    useEffect(() => {
        let amount: number = 0;
        cartItems.forEach((p: IProduct) => amount += p.total);
        setAmount(amount);
    }, [setAmount, cartItems]);

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
                                    <CartItem product={product} onRemoveFromCart={(id) => onRemoveFromCart(id)} onAddOrRemove={(product: IProduct) => { onAddOrRemove(product) }} />
                                </Box>
                            ))}

                            <Box>
                                <Typography component={"h2"}>Subtotal:  {formatPrice('USD', payable)}</Typography>
                            </Box>
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
