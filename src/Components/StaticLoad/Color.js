import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField } from "@mui/material";

function Color(props) {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/staticDropdown/colors")
      .then((response) => {
        const data = response.data;
        setColors([...colors, ...data]);
      })
      .catch((error) => console.log(error));
  }, []);

  //console.log("Brands: ", brands);
  return (
    <div className="form_controls">
      {/* <label>Color : </label>

      <select onChange={props.onChangeColorFilter}>
        {colors.map((color) => (
          <option key={color.id} value={color.id}>
            {color.name}
          </option>
        ))}
      </select> */}
      <TextField
        id="outlined-select-currency"
        select
        label="Color :"
        onChange={props.onChangeColorFilter}
        helperText="Please select color"
        size="small"
        fullWidth="true"
        SelectProps={{
          native: true,
        }}
      >
        <option key="0"></option>
        {colors.map((color) => (
          <option key={color.id} value={color.name}>
            {color.name}
          </option>
        ))}
      </TextField>
    </div>
  );
}

export default Color;