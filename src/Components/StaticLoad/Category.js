import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField } from "@mui/material";

function Category(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/staticDropdown/categories")
      .then((response) => {
        const data = response.data;
        setCategories([...categories, ...data]);
      })
      .catch((error) => console.log(error));
  }, []);

  //console.log("Brands: ", brands);
  return (
    <div className="form_controls">
      {/* <label>Category : </label>

      <select onChange={props.onChangeCategoryFilter}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select> */}
      <TextField
        id="outlined-select-currency"
        select
        label="Category :"
        onChange={props.onChangeCategoryFilter}
        helperText="Please select category"
        size="small"
        fullWidth="true"
        SelectProps={{
          native: true,
        }}
      >
        <option key="0"></option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </TextField>
    </div>
  );
}

export default Category;
