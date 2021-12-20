import styled from '@emotion/styled';
import Badge from '@mui/material/Badge';
import CartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { IProduct, RootState } from '@store/type'

export const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
`;

interface CartButtonProps {
    cartItems: IProduct[];
    loading: boolean;
}

export const CartButton = ({cartItems, loading}: CartButtonProps) => {
    return (
        <StyledLink to={'/cart'}>
            <IconButton size="large" aria-label="show Cart items" color='inherit'>
                <Badge style={{filter: loading ? 'blur(1px)' : 'blur(0)'}} badgeContent={cartItems.length} color="error">
                    <CartIcon />
                </Badge>
            </IconButton>
        </StyledLink>
    )
}

const mapStateToProps = (state: RootState) => ({
    loading: state.cart.loading,
    cartItems: state.cart.list,
})


export default connect(mapStateToProps)(CartButton)
