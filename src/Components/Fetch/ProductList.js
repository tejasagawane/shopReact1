import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

function ProductList(props) {
  const [products, setProducts] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "productArticle", headerName: "Artical", width: 70 },
    { field: "brand", headerName: "brand", width: 80 },
    { field: "color", headerName: "color", width: 70 },
    { field: "entryDate", headerName: "entryDate", width: 100 },
    { field: "size", headerName: "size", width: 100 },
    { field: "category", headerName: "category", width: 100 },
    { field: "Action", headerName: "Action", width: 100 },
    // { field: "categoryId", headerName: "categoryId", width: 100 },
    // { field: "colorId", headerName: "colorId", width: 70 },
    // { field: "costOfPrice", headerName: "costOfPrice", width: 70 },
    // { field: "entryDate", headerName: "entryDate", width: 70 },
    // { field: "gst", headerName: "gst", width: 70 },
    // { field: "marketRatePrice", headerName: "marketRatePrice", width: 70 },
    // { field: "productArticle", headerName: "productArticle", width: 70 },
    // { field: "sellingPrice", headerName: "sellingPrice", width: 70 },
    // { field: "sellingDate", headerName: "sellingDate", width: 70 },
    // { field: "size", headerName: "size", width: 70 },
    // { field: "stakeHolderId", headerName: "stakeHolderId", width: 70 },
    // { field: "statusId", headerName: "statusId", width: 70 },
  ];
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/shop")
      .then((response) => {
        const data = response.data;
        console.log(data);
        setProducts([...products, ...data]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    // <div style={{ height: 700, width: "100%" }}>
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

export default ProductList;
