import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
// Redux
import { connect } from 'react-redux';
import { IProduct, RootState } from '@store/type';
import { getProducts } from "@store/Actions/productActions";
import { addToCart } from "@store/Actions/cartActions";
// Components
import Loader from '@components/Loader/index'
import ProductCard from '@components/ProductCard';
import Flex from '@components/Flex'

interface ProductProps {
    loading: boolean;
    items: IProduct[];
    getProducts: () => void;
    addToCart: (product: IProduct) => void;
}

const NoRecords = () => <Typography textAlign={'center'} variant='h4' component={'div'}>No Records Found.</Typography>

export const Products = ({ loading, items, getProducts, addToCart }: ProductProps) => {
    // const [cart, setCart] = useState();

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    // Add to cart method
    const onAddToCart = (product: IProduct, quantity?: number) => {
        let tmObj = {
            ...product,
            quantity
        }
        addToCart(tmObj);
    }


    return (
        <Box>
            {loading && <Loader />}
            {!loading && items && items.length < 1
                ? <NoRecords />
                : (
                    <Flex justifyContent={'space-around'}>
                        {items.map((product: IProduct) => (
                            <Box key={product.id} marginBottom={3}>
                                <ProductCard product={product} onAddToCart={(quantity: number) => onAddToCart(product, quantity)} />
                            </Box>
                        ))}
                    </Flex>
                )
            }
        </Box >
    )
}

const mapStateToProps = (state: RootState) => ({
    loading: state.products.loading,
    items: state.products.list
})

const mapDispatchToProps = {
    getProducts,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
