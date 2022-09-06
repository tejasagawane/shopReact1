import React, { useState } from "react";
import {
  AppBar,
  backdropClasses,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
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
      <React.Fragment>
        <AppBar sx={{ background: "#342830" }}>
          <Toolbar>
            {/* <ShopTwoIcon /> */}
            {/* <LocalMallIcon /> */}
            <StoreIcon />
            <Typography>Subhash Shoe Mart Baramati </Typography>
            <StoreIcon />
            {/* <LocalMallIcon /> */}
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
          </Toolbar>
        </AppBar>
        {addStock ? <ProductForm /> : null}
        {updateStock ? <ProductList1 /> : null}
        {soldProduct ? <SoldProductList /> : null}
        {addBrand ? <BrandForm /> : null}
        {addStakeHolder ? <StakeHolderForm /> : null}
        {addCategory ? <CategoryForm /> : null}
        {addColor ? <ColorForm /> : null}
        {/* <img src={myshop} height={500} width={1250} /> */}
      </React.Fragment>
    </div>
  );
}

export default ProductAppBar;
