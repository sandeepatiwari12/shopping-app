import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { formatPrice } from '@utils/price-format';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { addCustomerDetails } from '@store/Actions/orderAction';
import { IProduct, RootState } from '@store/type';
// Component
import Flex from "@components/Flex";
import Loader from '@components/Loader';
import { StyledLink } from '@components/CartButton';
import ContactForm from '@components/Forms/Contact';

interface CartProps {
    loading: boolean;
    cartItems: IProduct[];
    formData: any;
    addCustomerDetails: (obj: any) => void;
}

export const StyledFlex = styled(Flex)`
    justify-content: space-between;
    padding: 8px 0;
`;
export const Para = styled(Typography)`
    font-weight: 600;
    font-size: 20px;
    line-height: 1;
`

function Shipping({ loading, cartItems, addCustomerDetails, formData }: CartProps) {
    const currency: string = 'USD';
    const [payable, setAmount] = useState<number>(0);
    const [shipping, setShipping] = useState<number>(0);
    const [tax, setTax] = useState<number>(0);
    const [items, setItems] = useState<number>(0);


    useEffect(() => {
        let amount: number = 0;
        let shipping: number = 0;
        let tax: number = 0;
        let quantities: number = 0;
        cartItems.forEach((p: IProduct) => {
            amount += p.total;
            shipping += p.shippingPrice;
            quantities += p.quantity
        });
        setAmount(amount);
        setShipping(shipping);
        setTax(tax);
        setItems(quantities);
    }, [setAmount, setShipping, setTax, cartItems]);

    const saveCustomerDetails = (values: any) => {
        addCustomerDetails(values)
    }
    return (
        <Box>
            {loading && <Loader />}
            <Flex justifyContent={'space-between'}>
                <Box width={1 / 2}>
                    <Typography variant='h4'>Shipping</Typography>

                    <ContactForm onSumbitForm={(event) => saveCustomerDetails(event)} formData={formData} />
                </Box>
                <Box width={1 / 3} padding={2} borderLeft={1}>
                    <StyledFlex>
                        <Para>Items:</Para>
                        <Para><Link to={'/cart'}>{items}</Link></Para>
                    </StyledFlex>
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
                            <Button color='warning' variant='contained' size='large'>Proceed to pay</Button>
                        </StyledLink>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

const mapStateToProps = (state: RootState) => ({
    loading: state.cart.loading,
    cartItems: state.cart.list,
    formData: state.order.customer
})
const mapDispatchToProps = {
    addCustomerDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Shipping)
