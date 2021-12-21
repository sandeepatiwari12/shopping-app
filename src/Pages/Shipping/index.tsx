import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { formatPrice } from '@utils/price-format';
import styled from '@emotion/styled';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { addCustomerDetails, createOrder } from '@store/Actions/orderAction';
import { IProduct, RootState } from '@store/type';
// Component
import Flex from "@components/Flex";
import Loader from '@components/Loader';
import ContactForm from '@components/Forms/Contact';
import Payment from '@components/Forms/Payment';
import useCalculation from '@utils/hooks/useCalculation';

interface CartProps {
    loading: boolean;
    cartItems: IProduct[];
    formData: any;
    addCustomerDetails: (obj: any) => void;
    createOrder: (obj: any) => void;
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

function Shipping({ loading, cartItems, addCustomerDetails, createOrder, formData }: CartProps) {
    const {
        currency,
        payable,
        shipping,
        tax,
        items, setValue } = useCalculation();
    const routeLocation = useLocation();
    const navigate = useNavigate()
    const [isContact, setContactForm] = useState<boolean>(true);


    useEffect(() => {
        setValue(cartItems);
        if(cartItems.length < 1) navigate('/products');
    }, [setValue, cartItems, navigate]);

    useEffect(() => {
        setContactForm(routeLocation.pathname === '/shipping' ? true : false);
    }, [setContactForm, routeLocation]);

    const saveCustomerDetails = (values: any) => {
        addCustomerDetails(values);
        navigate('payment')
    }
    const proceedToPay = (values: any) => {
        createOrder({ order: values, customerDetails: formData });
        navigate('/products')
    }
    return (
        <Box>
            {loading && <Loader />}
            <Flex justifyContent={'space-between'}>
                <Box width={1 / 2}>
                    <Typography variant='h4'>{isContact ? 'Shipping' : 'Payment'}</Typography>
                    {isContact && <ContactForm onSumbitForm={(event) => saveCustomerDetails(event)} formData={formData} />}
                    {!isContact && <Payment onSumbitForm={(event) => { proceedToPay(event) }} formData={{}} />}
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
    addCustomerDetails,
    createOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(Shipping)
