

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../UserProvider';{}

export default function MediaCard({item}) {
  const {_id,name,description,images} =item
  const {user,setItemsInCart} = useUser()
   
  const navigate = useNavigate(); // React Router hook for navigation
 

  const handleAddToCart = async (item) => {
    console.log(item._id)
    try {
      const response = await fetch('api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          "userId": user,
          "product": item._id,
          "quantity": 1
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }

      const updatedCart = await response.json();
      console.log(updatedCart.cart.items); // Update local cart state with the response
      setItemsInCart(updatedCart.cart.items.length ||0)
    } catch (error) {
      console.error('Error adding to cart:', error.message);
    }
  };



  const handleViewDetails = () => {
    navigate(`/product/${_id}`); // Navigate to the product details page
  };
 
  return (
    <Card sx={{  }}>
      <CardMedia
        sx={{ height: 250}}
        image={`/images/electronics/${images[0]}`} 
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button   onClick={()=>handleAddToCart(item)} size="small">AddToCart</Button>
        <Button    onClick={handleViewDetails} size="small">ViewDetails</Button>
      </CardActions>
    </Card>
  );
}
