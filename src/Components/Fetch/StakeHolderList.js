import React, { useState, useEffect, useContext } from "react";
import "../../App.css";
import { forwardRef } from "react";
import Avatar from "react-avatar";
import Grid from "@material-ui/core/Grid";
import { UserContext } from "../../Login/Context/LoginContext";
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
import { Stack } from "@mui/system";

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


function StakeHolderList(props) {
    const [user] = useContext(UserContext);
    var columns = [
      { title: "id", field: "id", hidden: true },
      {
        title: "Avatar",
        render: (rowData) => (
          <Avatar
            maxInitials={1}
            size={40}
            round={true}
            name={rowData === undefined ? " " : rowData.name}
          />
        ),
      },
      { title: "name", field: "name" },
      { title: "Bill Date", field: "billDate" },
      { title: "Bill Amount", field: "billAmount" },
      { title: "Paid Date", field: "paidDate"},
      { title: "Paid Amount", field: "paidAmount" },      
    ];
    const [data, setData] = useState([]); //table data
  
    //for error handling
    const [iserror, setIserror] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
  
    useEffect(() => {
     
          const data1 = props.data;
          console.log(data1);
          setData([...data, ...data1]);
       
    }, []);
  
  
    return (
      // <div className="App">
      <Stack>
        {/* <Grid container spacing={1}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}> */}
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
              title="Please find below stake holder details"
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
                          Total Bill :
                          {
                            data.reduce(
                              (agg, row) =>
                                agg +
                                Math.round(row.billAmount),
                              0
                            )
                          }
                          And Due Amout : 
                          {
                            data.reduce(
                              (agg, row) =>
                                agg +
                                Math.round(row.billAmount),
                              0
                            ) -
                            data.reduce(
                              (agg, row) =>
                                agg +
                                Math.round(row.paidAmount),
                              0
                            )
                          }
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                ),
              }}
              options={{
                exportButton: true, grouping: true ,  headerStyle: {
                  backgroundColor: '#01579b',
                  color: '#FFF'
                }
              }}
            />
          {/* </Grid>
          <Grid item xs={3}></Grid>
        </Grid> */}
     {/* / </div> */}
      </Stack>
    );
  }
  
export default StakeHolderList