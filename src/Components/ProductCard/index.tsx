import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
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
                height="140"
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
