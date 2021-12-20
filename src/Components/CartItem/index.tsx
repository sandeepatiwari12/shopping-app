import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IProduct } from '@store/type';
import { formatPrice } from '@utils/price-format';
import Flex from '@components/Flex';

interface CartItemProps {
    product: IProduct;
    onRemoveFromCart: (id: string) => void;
    onAddOrRemove?: (product: IProduct) => void;
}

const CartItem = ({ product, onRemoveFromCart, onAddOrRemove }: CartItemProps) => {

    const increaseOrDecrease = (qty: number) => {
        if(product.quantity > 1 || qty > 0) onAddOrRemove({...product, quantity: qty})
        else onRemoveFromCart(product.id)
    }
    return (
        <Card color='primary'>
            <CardHeader
                avatar={<Avatar
                    alt={product.id}
                    src={product.imageUrl}
                    sx={{ width: 100, height: 100 }}
                />}
                title={<Typography>{product.name} </Typography>}
                subheader={<Typography fontWeight={500}>
                    Quantity: {formatPrice(product.currency, product.price)} x {product.quantity} = {formatPrice(product.currency, product.total)}
                </Typography>}
                action={<IconButton size="large" color='error' onClick={() => onRemoveFromCart(product.id)}>
                    <DeleteIcon fontSize='inherit' />
                </IconButton>} />
            <CardContent>
                {/* Price {formatPrice(product.currency, product.total)} */}
                <Box>
                    <Flex alignItems={'center'}>
                        <Button color='success' variant='outlined' onClick={() => increaseOrDecrease(1)}>
                            <AddIcon />
                        </Button>
                        <Typography paddingX={2}>{product.quantity}</Typography>
                        <Button color='error' variant='outlined' onClick={() => increaseOrDecrease(-1)}>
                            <RemoveIcon />
                        </Button>
                    </Flex>
                </Box>
            </CardContent>
        </Card>
    );
}
export default CartItem;
