import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartButton, { StyledLink } from '@components/CartButton'


const Navbar = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="relative">
                <Toolbar>
                    <StyledLink to={'/products'}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ display: 'block' }}
                        >
                            Shop
                        </Typography>
                    </StyledLink>
                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <StyledLink to={'/products'}>
                            <Button color="inherit">
                                Products
                            </Button>
                        </StyledLink>
                        <CartButton />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;