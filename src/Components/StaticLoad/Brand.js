import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

function Brand(props) {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/staticDropdown/brands")
      .then((response) => {
        const data = response.data;
        setBrands([...brands, ...data]);
      })
      .catch((error) => console.log(error));
  }, []);

  //console.log("Brands: ", brands);
  return (
    <div className="form_controls">
      {/* <label>Brand : </label> */}

      <TextField
        id="outlined-select-currency"
        select
        label="Brand :"
        onChange={props.onChangeBrandFilter}
        helperText="Please select brand"
        size="small"
        fullWidth="true"
        SelectProps={{
          native: true,
        }}
      >
        <option key="0"></option>
        {brands.map((brand) => (
          <option key={brand.id} value={brand.name}>
            {brand.name}
          </option>
        ))}
      </TextField>
      {/* <select onChange={props.onChangeBrandFilter}>
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default Brand;
