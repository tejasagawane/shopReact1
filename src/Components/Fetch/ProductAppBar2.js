import React, { useState,useContext } from "react";
import {
  AppBar,
  backdropClasses,
  Tabs,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StoreIcon from "@mui/icons-material/Store";
import { Tab } from "@material-ui/core";
import ProductList1 from "./ProductList1";
import ProductForm from "../Forms/ProductForm";
import BrandForm from "../Forms/BrandForm";
import StakeHolderForm from "../Forms/StakeHolderForm";
import ColorForm from "../Forms/ColorForm";
import CategoryForm from "../Forms/CategoryForm";
import SoldProductList from "./SoldProductList";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { UserContext } from "../../Login/Context/LoginContext";

// import myshop from "../../myshop.jpg";

function ProductAppBar() {
  const [value, setValue] = useState();
  const [addStock, setAddStock] = useState(false);
  const [updateStock, setUpdateStock] = useState(false);
  const [addBrand, setAddBrand] = useState(false);
  const [addStakeHolder, setAddStakeHolder] = useState(false);
  const [addColor, setAddColor] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [soldProduct, setSoldProduct] = useState(false);

  const settings = ['Logout'];
  const [user, setUser] = useContext(UserContext);
  
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setUser();
  };

  const openAddComponent = () => {
    setAddStock(true);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(false);
  };

  const openUpdateComponent = () => {
    setUpdateStock(true);
    setAddStock(false);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(false);
  };

  const openSoldProductComponent = () => {
    setSoldProduct(true);
    setAddStock(false);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddColor(false);
    setAddCategory(false);
  };

  const openStakeHolderComponent = () => {
    setAddStakeHolder(true);
    setAddStock(false);
    setUpdateStock(false);
    setAddBrand(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(false);
  };

  const openBrandComponent = () => {
    setAddBrand(true);
    setAddStock(false);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddColor(false);
    setAddCategory(false);
    setSoldProduct(false);
  };

  const openColorComponent = () => {
    setAddColor(true);
    setAddStock(false);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddCategory(false);
    setSoldProduct(false);
  };

  const openCategoryComponent = () => {
    setAddCategory(true);
    setAddStock(false);
    setUpdateStock(false);
    setAddStakeHolder(false);
    setAddBrand(false);
    setAddColor(false);
    setSoldProduct(false);
  };
  return (
    <div>
    <AppBar sx={{ background: "#342830" }} position="static" enableColorOnDark>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
               
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, value) => {
                setValue(value);
              }}
              indicatorColor="secondary"
            >
              <Tab label="Add Stocks" onClick={openAddComponent}></Tab>
              <Tab label="Update Stocks" onClick={openUpdateComponent}></Tab>
              <Tab label="Sold Stocks" onClick={openSoldProductComponent}></Tab>
              <Tab
                label="Add StakeHolders"
                onClick={openStakeHolderComponent}
              ></Tab>
              <Tab label="Add Color" onClick={openColorComponent}></Tab>
              <Tab label="Add Brand" onClick={openBrandComponent}></Tab>
              <Tab label="Add category" onClick={openCategoryComponent}></Tab>
            </Tabs>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Sharp" src="/static/images/avatar/2.jpg" />
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
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>

     {addStock ? <ProductForm /> : null}
        {updateStock ? <ProductList1 /> : null}
        {soldProduct ? <SoldProductList /> : null}
        {addBrand ? <BrandForm /> : null}
        {addStakeHolder ? <StakeHolderForm /> : null}
        {addCategory ? <CategoryForm /> : null}
        {addColor ? <ColorForm /> : null}
  </div>
  );
}

export default ProductAppBar;