import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "../../api/axios";
import { UserContext } from "../../Login/Context/LoginContext";
import {
  Typography,
  Stack,
} from "@mui/material";
const URL = "/api/v1/staticDropdown/color/add";

function ColorForm() {
  const [colorName, setColorName] = useState("");
  const [user] = useContext(UserContext);
  const changeHandler = (e) => {
    setColorName(e.target.value);
    //console.log(colorName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      name: colorName,
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
      {/* <h2>Add Color</h2> */}
      <Typography>Add Color</Typography>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          name="colorName"
          value={colorName}
          onChange={changeHandler}
        ></input> */}
        <TextField
          label="Color :"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
          type="text"
          name="colorName"
          fullWidth="true"
          value={colorName}
          onChange={changeHandler}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ColorForm;
