// import * as React from 'react';
import React, { useState,useContext } from "react";
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import StakeHolderForm from "./Components/Forms/StakeHolderForm";
import ProductForm from "./Components/Forms/ProductForm";
import BrandForm from "./Components/Forms/BrandForm";
import ColorForm from "./Components/Forms/ColorForm";
import CategoryForm from "./Components/Forms/CategoryForm";
import StakeHolderSearch from "./Components/Forms/StakeHolderSearch";
import SoldProductList from "./Components/Fetch/SoldProductList";
import ProductList1 from "./Components/Fetch/ProductList1";
import { UserContext } from "./Login/Context/LoginContext";

const pages = ['Add Stock', 'Update Stock', 'Sell', 'StakeHolder'];
const settings = ['StakeHolder', 'Brand', 'Color', 'Category','Logout'];

const ResponsiveAppBar = () => {
  //const [user, setUser] = useContext(UserContext);  
  const [value, setValue] = useState();
  const [addStock, setAddStock] = useState(false);
  const [updateStock, setUpdateStock] = useState(false);
  const [addBrand, setAddBrand] = useState(false);
  const [addStakeHolder, setAddStakeHolder] = useState(false);
  const [searchStakeHolder, setSearchStakeHolder] = useState(false);
  const [addColor, setAddColor] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [soldProduct, setSoldProduct] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const handleCloseNavMenuAddStock = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setAnchorElNav(null);
    setAddStock(true);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(false);
    setSearchStakeHolder(false);
  };

  const handleCloseNavMenuUpdateStock = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setAnchorElNav(null);
    setAddStock(false);
    setUpdateStock(true);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(false);
    setSearchStakeHolder(false);
  };

  const handleCloseNavMenuSell = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setAnchorElNav(null);
    setAddStock(false);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(true);
    setSearchStakeHolder(false);
  };

  const handleCloseNavMenuStakeHolder = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setAnchorElNav(null);
    setAddStock(false);
    setUpdateStock(false);
    setAddStakeHolder(true);
    setAddBrand(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(false);
    setSearchStakeHolder(false);
  };

  const handleCloseUserMenuStakeHolder = (e: React.ChangeEvent<any>) => {   
    e.preventDefault();
    setAnchorElUser(null);
    setSearchStakeHolder(true);
    setAddStakeHolder(false);
    setAddStock(false);
    setUpdateStock(false);
    setAddBrand(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(false);
  }

  const handleCloseUserMenuBrand = (e: React.ChangeEvent<any>) => {   
    e.preventDefault();
    setAnchorElUser(null);
    setAddBrand(true);
    setAddStock(false);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(false);
    setSearchStakeHolder(false);
  }

  const handleCloseUserMenuColor = (e: React.ChangeEvent<any>) => {   
    e.preventDefault();
    setAnchorElUser(null);
    setAddColor(true);
    setAddStock(false);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddCategory(false);
    setSoldProduct(false);
    setSearchStakeHolder(false);
  }

  const handleCloseUserMenuCategory = (e: React.ChangeEvent<any>) => {   
    e.preventDefault();
    setAnchorElUser(null);
    setAddColor(false);
    setAddStock(false);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddCategory(true);
    setSoldProduct(false);
    setSearchStakeHolder(false);
  }

  const handleOnChangeUserMenu = (e: React.ChangeEvent<any>) => {
   
    //e.preventDefault();
    //setAnchorElUser(null);
  
      //setUser();
  }

  return (
    <Stack>
      <Stack>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem onClick={handleCloseNavMenuAddStock}>
                  <Typography textAlign="center">Add Stock</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenuUpdateStock}>
                  <Typography textAlign="center">Update Stock</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenuSell}>
                  <Typography textAlign="center">Sell</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenuStakeHolder}>
                  <Typography textAlign="center">StakeHolder</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
             <Button
                onClick={handleCloseNavMenuAddStock}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Add Stock
              </Button>
              <Button
                onClick={handleCloseNavMenuUpdateStock}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Update Stock
              </Button>
              <Button
                onClick={handleCloseNavMenuSell}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Sell
              </Button>
              <Button
                onClick={handleCloseNavMenuStakeHolder}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                StakeHolder
              </Button>              

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
                <MenuItem onClick={handleCloseUserMenuStakeHolder} >
                  <Typography textAlign="center">StakeHolder</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenuBrand} >
                  <Typography textAlign="center">Brand</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenuColor} >
                  <Typography textAlign="center">Color</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenuCategory} >
                  <Typography textAlign="center">Category</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>        
      </Container>
    </AppBar>
    </Stack>
    <Stack>
    {addStock ? <ProductForm /> : null}
    {updateStock ? <ProductList1 /> : null}
    {soldProduct ? <SoldProductList /> : null}
    {addBrand ? <BrandForm /> : null}
    {addStakeHolder ? <StakeHolderForm /> : null}
    {addCategory ? <CategoryForm /> : null}
    {addColor ? <ColorForm /> : null}
    {searchStakeHolder ? <StakeHolderSearch /> : null}
    </Stack>
    </Stack>
    
    );
  };
export default ResponsiveAppBar;
