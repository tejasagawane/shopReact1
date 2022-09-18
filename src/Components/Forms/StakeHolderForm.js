import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "../../api/axios";
import { UserContext } from "../../Login/Context/LoginContext";
import {
  Typography,
  Stack,
  InputAdornment
} from "@mui/material";
const URL = "/api/v1/staticDropdown/stakeHolder/add";

function StakeHolderForm() {
  const [stakeHolder, setStakeHolder] = useState({
    name: "",
    billDate: "",
    paidDate: "",
    billAmount: "",
    paidAmount: "",
  });
  const [user] = useContext(UserContext);

  const [myData, setMyData] = useState("");

  const changeHandler = (e) => {
    //setStakeHolder({ [e.target.name]: e.target.value });
    //console.log(brandName);
    const { name, value } = e.target;
    setStakeHolder((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      name: stakeHolder.name,
      billDate: stakeHolder.billDate,
      paidDate: stakeHolder.paidDate,
      billAmount: stakeHolder.billAmount,
      paidAmount: stakeHolder.paidAmount,
    });
    // alert(data);
    // console.log(data);
    setMyData(myData);
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
        console.log(data1);
        alert("Submitted successfully..");
      })
      .catch((error) => {
        console.log(error);
        //alert(error);
      });
  };

  return (
    <div className="div_form">
      {/* <h2>Add StakeHolder</h2> */}
      <Typography>Add StakeHolder</Typography>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label>StakeHolder Name : </label>
          <input
            type="text"
            name="name"
            value={stakeHolder.name}
            onChange={changeHandler}
          ></input> */}
          <TextField
            label="StakeHolder Name : "
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            type="text"
            name="name"
            fullWidth="true"
            value={stakeHolder.name}
            onChange={changeHandler}
           
          />
          <p></p>
        </div>
        <div>
          {/* <label>Bill Date : </label>
          <input
            type="date"
            name="billDate"
            value={stakeHolder.billDate}
            onChange={changeHandler}
          ></input> */}
          <TextField
            id="date"
            label="Bill Date :"
            type="date"
            size="small"
            name="billDate"
            value={stakeHolder.billDate}
            onChange={changeHandler}
            fullWidth="true"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p></p>
        </div>
        <div>
          {/*<label>Paid Date : </label>
           <input
            type="date"
            name="paidDate"
            value={stakeHolder.paidDate}
            onChange={changeHandler}
          ></input> */}
          <TextField
            id="date"
            label="Paid Date :"
            type="date"
            size="small"
            name="paidDate"
            value={stakeHolder.paidDate}
            onChange={changeHandler}
            fullWidth="true"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p></p>
        </div>
        <div>
          {/* <label>Bill Amout : </label>
          <input
            type="text"
            name="billAmount"
            value={stakeHolder.billAmount}
            onChange={changeHandler}
          ></input> */}
          <TextField
            label="Bill Amout : "
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            type="text"
            name="billAmount"
            fullWidth="true"
            value={stakeHolder.billAmount}
            onChange={changeHandler}
            InputProps={{
              startAdornment: <InputAdornment position="start">₹</InputAdornment>,
            }}
          />
          <p></p>
        </div>
        <div>
          {/*<label>Paid Amount : </label>
           <input
            type="text"
            name="paidAmount"
            value={stakeHolder.paidAmount}
            onChange={changeHandler}
          ></input> */}
          <TextField
            label="Paid Amount : "
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            type="text"
            name="paidAmount"
            fullWidth="true"
            value={stakeHolder.paidAmount}
            onChange={changeHandler}
            InputProps={{
              startAdornment: <InputAdornment position="start">₹</InputAdornment>,
            }}
          />
          <p></p>
        </div>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default StakeHolderForm;
