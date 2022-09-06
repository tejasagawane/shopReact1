import React, { useState, useEffect } from "react";
import "../../App.css";
import { forwardRef } from "react";
import Avatar from "react-avatar";
import Grid from "@material-ui/core/Grid";

import MaterialTable, { MTablePagination } from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Alert from "@material-ui/lab/Alert";
import { Pagination, Typography } from "@mui/material";
import { TablePagination } from "@material-ui/core";
import axios from "../../api/axios";
const URL = "/api/v1/shop/soldProducts";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

// function validateEmail(email) {
//   const re =
//     /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
//   return re.test(String(email).toLowerCase());
// }

function SoldProductList() {
  const [tl, setTl] = useState(0);

  var columns = [
    { title: "id", field: "id", hidden: true },
    {
      title: "Avatar",
      render: (rowData) => (
        <Avatar
          maxInitials={1}
          size={40}
          round={true}
          name={rowData === undefined ? " " : rowData.brand}
        />
      ),
    },
    { title: "Brand", field: "brand" },
    { title: "Article", field: "productArticle" },
    { title: "Color", field: "color" },
    { title: "Entry Date", field: "entryDate", width: "20%" },
    { title: "Size", field: "size" },
    { title: "Category", field: "category" },
    { title: "MRP", field: "marketRatePrice" },
    { title: "SellingPrice", field: "sellingPrice" },
    {
      title: "CostOfPrice + GST",
      render: (rowData) =>
        rowData.costOfPrice + (rowData.costOfPrice * rowData.gst) / 100,
    },
    {
      title: "Profit",
      render: (rowData) =>
        rowData.sellingPrice != 0
          ? rowData.sellingPrice -
            (rowData.costOfPrice + (rowData.costOfPrice * rowData.gst) / 100)
          : 0,
    },
  ];
  const [totalSummaryItems] = useState([
    { columnName: "costOfPrice", type: "sum" },
  ]);
  const [data, setData] = useState([]); //table data

  //for error handling
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        //setData(res.data.data);

        const data1 = res.data;
        console.log(data1);
        setData([...data, ...data1]);
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);

  //alert(tl);

  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <div>
            {iserror && (
              <Alert severity="error">
                {errorMessages.map((msg, i) => {
                  return <div key={i}>{msg}</div>;
                })}
              </Alert>
            )}
          </div>
          <MaterialTable
            title="Please find below stock details"
            columns={columns}
            data={data}
            icons={tableIcons}
            components={{
              Pagination: (props) => (
                <div>
                  <TablePagination {...props} />
                  <Grid
                    container
                    style={{ padding: 15, background: "#f5f5f5" }}
                  >
                    <Grid sm={6} item align="right">
                      <Typography variant="subtitle2">
                        Total Profit :
                        {
                          //data.reduce(agg, row)
                          data.reduce(
                            (agg, row) =>
                              agg +
                              (row.sellingPrice -
                                (row.costOfPrice +
                                  (row.costOfPrice * row.gst) / 100)),
                            0
                          )
                        }
                        {/* {data.map((product) => {
                          return (
                            <div>
                              {(product.sellingPrice -
                                (product.costOfPrice +
                                  (product.costOfPrice * product.gst) / 100))}
                            </div>
                          );
                        })} */}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}

export default SoldProductList;
