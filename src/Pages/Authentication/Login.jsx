
import CssBaseline from "@mui/material/CssBaseline";
import {
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  alertTitleClasses,

} from "@mui/material";

import { Link } from "react-router-dom";

import { ToastContainer, toast, Slide } from "react-toastify";

import { Formik, Form } from "formik";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


import { setUserCredential } from "../../Store/authSlice.js";

import { validationSchema } from "../../Schema/loginSchema.js";


import { loginSubmit } from "../../API/register";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const errorToastMessage = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 1000,
    });
  };
  const errorMessage = (error) => {
    errorToastMessage(error);
  };

  const handleLogin = async (
    values,
    { setSubmitting, setErrors, setFieldError }
  ) => {
    const email = values.email;
    const password = values.password;

    loginSubmit({email,password})
    .then((res)=>{
        
       if(res.status){
 


        dispatch(
          setUserCredential({
            accestoken: res.token,
            data:res.userDetails
          })
        );

        
      
       }
      
      
       

    })
    .catch((res)=>{
        
        

            setErrors({
              password:"credentails not correct",
              email: "   ",
              types: "MultipleFieldErrors",
            });
          

    })
  };

  
  return (
    <>
      <ToastContainer />
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            {/* <LockOutlined /> */}
          </Avatar>
          <Typography variant="h5">Login</Typography>
          <Box sx={{ mt: 1 }}>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({
                values,
                handleChange,
                handleBlur,
                errors,
                touched,
                isSubmitting,
              }) => (
                <Form>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoFocus
                    value={values.email}
                    onChange={handleChange}
                    // onBlur={handleBlur}

                    error={touched.email && errors.email}
                    helperText={touched.email && errors.email}
                  />

                  <TextField
                    margin="normal"
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    // onBlur={handleBlur}

                    error={errors.password && errors.password}
                    helperText={errors.password && errors.password}
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    type="submit"
                    onSubmit={handleLogin}
                    // disabled={isSubmitting}
                  >
                    Login
                  </Button>
                </Form>
              )}
            </Formik>
            
            <br></br>
            <div className="pl-8">
              <Grid container justifyContent={"flex-center"} className="pl-4">
                <Grid item>
                  <Link className="pl-4" to="/register">
                    Don't have an account?
                    <span className="text-blue-500 pl-2">Register</span>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage