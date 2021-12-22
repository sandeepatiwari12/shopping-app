import * as React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    IconButton,
    Typography
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import { IProduct } from '@store/type';

interface ProductCardProps {
    product: IProduct;
    onAddToCart: (quantity: number) => void;
    onFavorite?: () => void;
}

const ProductCard = ({ product, onAddToCart, onFavorite }: ProductCardProps) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                image={product.imageUrl}
                alt={product.id}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color='success' variant='outlined' onClick={() => onAddToCart(1)}>Add to cart</Button>
                <IconButton size="small" onClick={onFavorite}>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
export default ProductCard;
