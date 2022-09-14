import React, { useEffect, useState, useContext } from "react";
import Brand from "../StaticLoad/Brand";
import Color from "../StaticLoad/Color";
import Category from "../StaticLoad/Category";
import StakeHolder from "../StaticLoad/StakeHolder";
import "./form.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
// import myshop from "../../myshop.jpg";
import axios from "../../api/axios";
import { UserContext } from "../../Login/Context/LoginContext";
const URL = "/add";

function ProductForm() {
  const initialValues = {
    entryDate: "",
    sellingDate: "",
    productArticle: "",
    size: "",
    quantity: "",
    brand: "",
    category: "",
    stakeHolder: "",
    color: "",
    marketRatePrice: "",
    costOfPrice: "",
    gst: "",
    status: "",
  };
  const [product, setProduct] = useState(initialValues);
  const [user] = useContext(UserContext);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.entryDate) {
      errors.entryDate = "Entry Date is required !";
      //alert(err.entryDate);
    }
    if (!values.productArticle) {
      errors.productArticle = "Product Artical is required !";
      //alert(err.entryDate);
    }
    if (!values.brand) {
      errors.brand = "Brand is required !";
      //alert(err.entryDate);
    }
    if (!values.color) {
      errors.color = "Color is required !";
      //alert(err.entryDate);
    }
    if (!values.category) {
      errors.category = "Category is required !";
      //alert(err.entryDate);
    }
    if (!values.stakeHolder) {
      errors.stakeHolder = "Stake Holder is required !";
      //alert(err.entryDate);
    }
    if (!values.size) {
      errors.size = "Size is required !";
      //alert(err.entryDate);
    }
    if (!values.quantity) {
      errors.quantity = "Quantity is required !";
      //alert(err.entryDate);
    }
    if (!values.marketRatePrice) {
      errors.marketRatePrice = "MRP is required !";
      //alert(err.entryDate);
    }
    if (!values.costOfPrice) {
      errors.costOfPrice = "Cost of price is required !";
      //alert(err.entryDate);
    }
    if (!values.gst) {
      errors.gst = "GST is required !";
      //alert(err.entryDate);
    }
    if (!values.status) {
      errors.status = "Status is required !";
      //alert(err.entryDate);
    }

    return errors;
  };

  useEffect(() => {
    //console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //console.log(product);
    }
  }, [formErrors]);

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0) {
  //     isFlag = false;
  //   } else {
  //     isFlag = true;
  //   }
  // }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(product));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      let data = JSON.stringify({
        entryDate: product.entryDate,
        sellingDate: product.sellingDate,
        productArticle: product.productArticle,
        size: product.size,
        quantity: product.quantity,
        brand: product.brand,
        category: product.category,
        stakeHolder: product.stakeHolder,
        color: product.color,
        marketRatePrice: product.marketRatePrice,
        costOfPrice: product.costOfPrice,
        gst: product.gst,
        status: product.status,
      });
      // alert(data);
      // console.log(data);
      axios
        .post(URL, data, {
          headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer "+user
          },
        })
        .then((response) => {
          const data1 = response.data;
          //alert(data1);
          //console.log(data1);
        })
        .catch((error) => {
          // console.log(error);
          //alert(error);
        });

      alert("Data is submitted successfully..");
    }

    // setProduct({ ...product, [e.target.name]: e.target.value });
    // console.log(product);
    // alert(
    //   product.productArticle +
    //     "," +
    //     product.brand +
    //     "," +
    //     product.category +
    //     "," +
    //     product.color +
    //     "," +
    //     product.costOfPrice +
    //     "," +
    //     product.entryDate +
    //     "," +
    //     product.gst +
    //     "," +
    //     product.marketRatePrice +
    //     "," +
    //     product.quantity +
    //     "," +
    //     product.statusId +
    //     "," +
    //     product.size +
    //     "," +
    //     product.stakeHolder
    // );
  };

  const changeHandler = (e) => {
    //setProduct({ ...product, [e.target.name]: e.target.value });
    // console.log(product);
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filterChangeBrandHandler = (e) => {
    //alert(e.target.value);
    setProduct({ ...product, brand: e.target.value });
    //console.log(product);
  };

  const filterChangeCategoryHandler = (e) => {
    //alert(e.target.value);
    setProduct({ ...product, category: e.target.value });
    //console.log(product);
  };

  const filterChangeColorHandler = (e) => {
    //alert(e.target.value);
    setProduct({ ...product, color: e.target.value });
    //console.log(product);
  };

  const filterStakeHolderHandler = (e) => {
    //alert(e.target.value);
    setProduct({ ...product, stakeHolder: e.target.value });
    //console.log(product);
  };
  return (
    <div className="div_form">
      {/* <img src={myshop} height={400} width={700} /> */}
      <h1>Add stock entries...</h1>
      {/* <pre>{JSON.stringify(product, undefined, 2)}</pre> */}
      <form onSubmit={handleSubmit}>
        <div className="form_controls">
          {/* <label>Entry Date : </label>
          <input
            type="date"
            name="entryDate"
            value={product.entryDate}
            onChange={changeHandler}
          ></input> */}
          <TextField
            id="date"
            label="Entry Date :"
            type="date"
            size="small"
            name="entryDate"
            value={product.entryDate}
            onChange={changeHandler}
            fullWidth="true"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p>{formErrors.entryDate}</p>
        </div>
        <div className="form_controls">
          {/* <label>Product Artical : </label> */}
          {/* <input
            type="text"
            name="productArticle"
            value={product.productArticle}
            onChange={changeHandler}
          ></input> */}
          <TextField
            label="Product Artical :"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            type="text"
            name="productArticle"
            fullWidth="true"
            value={product.productArticle}
            onChange={changeHandler}
          />
          <p>{formErrors.productArticle}</p>
        </div>
        <Brand onChangeBrandFilter={filterChangeBrandHandler} />
        <p>{formErrors.brand}</p>
        <Category onChangeCategoryFilter={filterChangeCategoryHandler} />
        <p>{formErrors.category}</p>
        <Color onChangeColorFilter={filterChangeColorHandler} />
        <p>{formErrors.color}</p>
        <StakeHolder onChangeStakeHolderFilter={filterStakeHolderHandler} />
        <p>{formErrors.stakeHolder}</p>
        <div className="form_controls">
          {/* <label>Size : </label>
          <input
            type="text"
            name="size"
            value={product.size}
            onChange={changeHandler}
          ></input>
          <p>{formErrors.size}</p> */}
          <TextField
            label="Size :"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            type="text"
            name="size"
            fullWidth="true"
            value={product.size}
            onChange={changeHandler}
          />
          <p>{formErrors.size}</p>
        </div>
        <div className="form_controls">
          {/* <label>Quality : </label>
          <input
            type="text"
            name="quantity"
            value={product.quantity}
            onChange={changeHandler}
          ></input> */}
          <TextField
            label="Quality :"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            type="text"
            name="quantity"
            fullWidth="true"
            value={product.quantity}
            onChange={changeHandler}
          />
          <p>{formErrors.quantity}</p>
        </div>
        <div className="form_controls">
          {/* <label>MRP : </label>
          <input
            type="number"
            name="marketRatePrice"
            value={product.marketRatePrice}
            onChange={changeHandler}
          ></input> */}
          <TextField
            label="MRP :"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            type="text"
            name="marketRatePrice"
            fullWidth="true"
            value={product.marketRatePrice}
            onChange={changeHandler}
          />
          <p>{formErrors.marketRatePrice}</p>
        </div>
        <div className="form_controls">
          {/* <label>Cost of Price : </label>
          <input
            type="number"
            name="costOfPrice"
            value={product.costOfPrice}
            onChange={changeHandler}
          ></input> */}
          <TextField
            label="Cost of Price :"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            type="text"
            name="costOfPrice"
            fullWidth="true"
            value={product.costOfPrice}
            onChange={changeHandler}
          />
          <p>{formErrors.costOfPrice}</p>
        </div>
        <div className="form_controls">
          {/* <label>GST : </label>
          <input
            type="number"
            name="gst"
            value={product.gst}
            onChange={changeHandler}
          ></input> */}
          <TextField
            label="GST :"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            type="text"
            name="gst"
            fullWidth="true"
            value={product.gst}
            onChange={changeHandler}
          />
          <p>{formErrors.gst}</p>
        </div>
        <div className="form_controls">
          {/* <label>Status : </label>
          <select
            name="statusId"
            value={product.statusId}
            onChange={changeHandler}
          >
            <option value="1">In-Stock</option>
            <option value="2">Sold</option>
          </select> */}
          <TextField
            id="outlined-select-currency"
            select
            label="Select Status"
            onChange={changeHandler}
            helperText="Please select status"
            size="small"
            name="status"
            fullWidth="true"
            value={product.status}
            SelectProps={{
              native: true,
            }}
          >
            <option value=""></option>
            <option value="In-Stock">In-Stock</option>
            <option value="Sold">Sold</option>
          </TextField>
          <p>{formErrors.status}</p>
        </div>
        <div className="form_actions">
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
