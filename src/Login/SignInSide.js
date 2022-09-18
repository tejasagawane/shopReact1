import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRef, useState, useEffect, useContext } from "react";
import axios from "../api/axios";
import { UserContext } from "./Context/LoginContext";
import Image from '../../src/myshop2.jpg';
const URL = "/authenticate";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Subhash Shoes Mart-Baramati
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  // const [auth, setAuth] = useContext(AuthContext);
  // const auth = useContext(Context);
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  // const [session,setSession] = useContext(ThemeContext)

  
  const changeHandlerUser = (e) => {
    setUserName(e.target.value);
    //console.log(brandName);
  };

  const changeHandlerPassword = (e) => {
    setPassword(e.target.value);
    //console.log(brandName);
  };


  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrMsg("");
  }, [userName, password]);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // console.log({
  //   //   user: data.get("user"),
  //   //   password: data.get("password"),
  //   // });
  //   try {
  //     const response = await axios.post(
  //       URL,
  //       JSON.stringify({ user, password }),
  //       {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       }
  //     );
  //     //console.log(JSON.stringify(response?.data));
  //     //console.log(JSON.stringify(response));
  //     alert(response.data);
  //     const accessToken = response?.data?.accessToken;
  //     const roles = response?.data?.roles;
  //     setAuth({ user, password, roles, accessToken });
  //     setUser("");
  //     setPassword("");
  //     setSuccess(true);
  //   } catch (err) {
  //     if (!err?.response) {
  //       setErrMsg("No Server Response");
  //     } else if (err.response?.status === 400) {
  //       setErrMsg("Missing Username or Password");
  //     } else if (err.response?.status === 401) {
  //       setErrMsg("Unauthorized");
  //     } else {
  //       setErrMsg("Login Failed");
  //     }
  //     //errRef.current.focus();
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      userName, password
    });
    //alert(data);
    axios
      //.post("http://localhost:8080/api/v1/staticDropdown/brand/add", data, {
      .post(URL, data, {
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      })
      .then((response) => {
        const data1 = response.data;
        //alert(data1);
        setToken(data1);
        setUser(data1)
        // const userData = {
        //   un : userName,
        //   tk : token
        // }
        // setUser([...user, ...userData]);
        // setAuth({ userName, password,token });
        alert("Logged In successfully..");
      })
      .catch((error) => {
        console.log(error);
        if (!error?.response) {
                alert("No Server Response");
              } else if (error.response?.status === 400) {
                alert("Missing Username or Password");
              } else if (error.response?.status === 401) {
                alert("Unauthorized");
              } else {
                alert("Login Failed");
              }
      });
  };

  return ( 
    
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:  `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="user"
                label="Login User"
                name="user"
                autoComplete="user"
                autoFocus
                onChange={changeHandlerUser}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={changeHandlerPassword}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
