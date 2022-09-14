import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "../../api/axios";
import { UserContext } from "../../Login/Context/LoginContext";
const URL = "/api/v1/staticDropdown/brand/add";


function BrandForm(props) {
  const [brandName, setBrandName] = useState("");
  const [user] = useContext(UserContext);

  const changeHandler = (e) => {
    setBrandName(e.target.value);
    //console.log(brandName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      name: brandName,
    });
    //alert(data);
    axios
      //.post("http://localhost:8080/api/v1/staticDropdown/brand/add", data, {
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
      <h2>Add Brand</h2>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Brand :"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
          type="text"
          name="brandName"
          fullWidth="true"
          value={brandName}
          onChange={changeHandler}
        />
        {/* <input
          type="text"
          name="brandName"
          value={brandName}
          onChange={changeHandler}
        ></input> */}
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default BrandForm;
