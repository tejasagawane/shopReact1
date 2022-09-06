import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField } from "@mui/material";

function StakeHolder(props) {
  const [stakeHolders, setStakeHolders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/staticDropdown/stakeHolders/distinct")
      .then((response) => {
        const data = response.data;
        setStakeHolders([...stakeHolders, ...data]);
      })
      .catch((error) => console.log(error));
  }, []);

  //console.log("Brands: ", brands);
  return (
    <div className="form_controls">
      {/* <label>Stake Holder : </label> */}
      <TextField
        id="outlined-select-currency"
        select
        label="StakeHolder :"
        onChange={props.onChangeStakeHolderFilter}
        helperText="Please select stakeHolder"
        size="small"
        fullWidth="true"
        SelectProps={{
          native: true,
        }}
      >
        <option key="0"></option>
        {stakeHolders.map((stakeHolder) => (
          <option key={stakeHolder.id} value={stakeHolder.name}>
            {stakeHolder.name}
          </option>
        ))}
      </TextField>

      {/* <select onChange={props.onChangeStakeHolderFilter}>
        {stakeHolders.map((stakeHolder) => (
          <option key={stakeHolder.id} value={stakeHolder.id}>
            {stakeHolder.name}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default StakeHolder;
