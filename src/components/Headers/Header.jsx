import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';
import PersonIcon from '@mui/icons-material/Person';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Badge } from '@mui/material';
import img from '../../assets/react.svg';
import { useUser } from '../../UserProvider';

export default function Header() {

  const  userId = localStorage.getItem('userId')
  const{user,itemsInCart} = useUser()

  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(90deg, rgba(33,150,243,1) 0%, rgba(0,230,118,1) 50%, rgba(0,212,255,1) 100%)', boxShadow: 3 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1 }}>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img src={img} alt="Logo" style={{ width: '50px', height: '50px' }} />
          <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
            E-Commerce
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button component={Link} to="/" color="inherit" sx={{ fontSize: '1.1rem', textTransform: 'capitalize' }}>
            Home
          </Button>
          <Button component={Link} to="/shop" color="inherit" sx={{ fontSize: '1.1rem', textTransform: 'capitalize' }}>
            Shop
          </Button>
          <Button component={Link} to="/about" color="inherit" sx={{ fontSize: '1.1rem', textTransform: 'capitalize' }}>
            About Us
          </Button>
          <Button component={Link} to="/contact" color="inherit" sx={{ fontSize: '1.1rem', textTransform: 'capitalize' }}>
            Contact Us
          </Button>
        </Box>

        {/* Profile and Cart Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          {/* Profile Link */}
          <IconButton component={Link} to="/user/profile" color="inherit">
            <PersonIcon sx={{ fontSize: 30 }} />
          </IconButton>

          {/* Cart Link */}
          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={itemsInCart} color="error"> {/* Example for showing cart items */}
              <ShoppingCartCheckoutSharpIcon sx={{ fontSize: 30 }} />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
