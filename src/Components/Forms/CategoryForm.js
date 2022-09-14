import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "../../api/axios";
import { UserContext } from "../../Login/Context/LoginContext";
const URL = "/api/v1/staticDropdown/category/add";

function CategoryForm() {
  const [categoryName, setCategoryName] = useState("");
  const [user] = useContext(UserContext);
  const changeHandler = (e) => {
    setCategoryName(e.target.value);
    //console.log(categoryName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      name: categoryName,
    });
    //alert(data);
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
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          name="categoryName"
          value={categoryName}
          onChange={changeHandler}
        ></input> */}
        <TextField
          label="Category :"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
          type="text"
          name="categoryName"
          fullWidth="true"
          value={categoryName}
          onChange={changeHandler}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default CategoryForm;
