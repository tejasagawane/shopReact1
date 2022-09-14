import React, { useState } from "react";
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

  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
    // <div>
    //   <React.Fragment>
    //     <AppBar position="static" sx={{ background: "#342830" }}>
    //     <Container maxWidth="xl">
    //     <Toolbar disableGutters>
    //       <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    //         {/* <ShopTwoIcon /> */}
    //         {/* <LocalMallIcon /> */}
    //         {/* <StoreIcon />
    //         <Typography>Subhash Shoe Mart Baramati </Typography> */}
    //         <Typography
    //         variant="h6"
    //         noWrap
    //         component="a"
    //         href="/"
    //         sx={{
    //           mr: 2,
    //           display: { xs: 'none', md: 'flex' },
    //           fontFamily: 'monospace',
    //           fontWeight: 700,
    //           letterSpacing: '.3rem',
    //           color: 'inherit',
    //           textDecoration: 'none',
    //         }}
    //       >
    //         LOGO
    //       </Typography>
    //         {/* <StoreIcon /> */}
    //         {/* <LocalMallIcon /> */}
    //         {/* <Tabs             
    //           textColor="inherit"
    //           value={value}
    //           onChange={(e, value) => {
    //             setValue(value);
    //           }}
    //           indicatorColor="secondary"
    //         >
    //           <Tab label="Add Stocks" onClick={openAddComponent}></Tab>
    //           <Tab label="Update Stocks" onClick={openUpdateComponent}></Tab>
    //           <Tab label="Sold Stocks" onClick={openSoldProductComponent}></Tab>
    //           <Tab
    //             label="Add StakeHolders"
    //             onClick={openStakeHolderComponent}
    //           ></Tab>
    //           <Tab label="Add Color" onClick={openColorComponent}></Tab>
    //           <Tab label="Add Brand" onClick={openBrandComponent}></Tab>
    //           <Tab label="Add category" onClick={openCategoryComponent}></Tab>
    //         </Tabs> */}
    //          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit"
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: 'bottom',
    //             horizontal: 'left',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'left',
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: 'block', md: 'none' },
    //           }}
    //         >
    //           {pages.map((page) => (
    //             <MenuItem key={page} onClick={handleCloseNavMenu}>
    //               <Typography textAlign="center">{page}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //       <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
    //       <Typography
    //         variant="h5"
    //         noWrap
    //         component="a"
    //         href=""
    //         sx={{
    //           mr: 2,
    //           display: { xs: 'flex', md: 'none' },
    //           flexGrow: 1,
    //           fontFamily: 'monospace',
    //           fontWeight: 700,
    //           letterSpacing: '.3rem',
    //           color: 'inherit',
    //           textDecoration: 'none',
    //         }}
    //       >
    //         LOGO
    //       </Typography>
    //       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    //         {pages.map((page) => (
    //           <Button
    //             key={page}
    //             onClick={handleCloseNavMenu}
    //             sx={{ my: 2, color: 'white', display: 'block' }}
    //           >
    //             {page}
    //           </Button>
    //         ))}
    //       </Box>

    //       <Box sx={{ flexGrow: 0 }}>
    //         <Tooltip title="Open settings">
    //           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
    //           </IconButton>
    //         </Tooltip>
    //         <Menu
    //           sx={{ mt: '45px' }}
    //           id="menu-appbar"
    //           anchorEl={anchorElUser}
    //           anchorOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //           }}
    //           open={Boolean(anchorElUser)}
    //           onClose={handleCloseUserMenu}
    //         >
    //           {settings.map((setting) => (
    //             <MenuItem key={setting} onClick={handleCloseUserMenu}>
    //               <Typography textAlign="center">{setting}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //       </Toolbar>
    //       </Container>
    //     </AppBar>
    //     {addStock ? <ProductForm /> : null}
    //     {updateStock ? <ProductList1 /> : null}
    //     {soldProduct ? <SoldProductList /> : null}
    //     {addBrand ? <BrandForm /> : null}
    //     {addStakeHolder ? <StakeHolderForm /> : null}
    //     {addCategory ? <CategoryForm /> : null}
    //     {addColor ? <ColorForm /> : null}
    //     {/* <img src={myshop} height={500} width={1250} /> */}
    //   </React.Fragment>
    // </div>
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
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
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
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
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
  );
}

export default ProductAppBar;
